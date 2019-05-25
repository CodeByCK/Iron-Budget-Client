import React, { Component, Fragment } from 'react';
import axios from "axios"

class Income extends Component {
  state = {
    name: 'Paycheck',
    planned: 0,
    received: '',
    user: this.props.user,
    incomes: [],
    collapsed: false,
    hovered: false,
    text: '',
    contentEditable: true,
    form: false,
    editActive: false,
    trash: true,
    amount: 0


  }

  componentDidMount() {

    this.updateIncomeAmount()

  }


  //!================== {{ Form Handler }} =============================


  eventHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //!================== {{ Submit Income }} =============================



  submitHandler = (e) => {
    e.preventDefault()
    let newIncome = {
      userId: this.state.user,
      name: this.state.name,
      planned: Number.parseFloat(this.state.planned),
      received: Number.parseFloat(this.state.received)
    }
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/newPaycheck`, newIncome)
      .then(response => {
        // console.log("submitted", response.data)
        this.setState({
          incomes: [...this.state.incomes, response.data],
          name: "",
          planned: ""
        })
        this.updateIncomeAmount()
      })
  }


  //!================== {{Collapse Card}} =============================


  collapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }


  //!========================== {{Edit Income}}  ==================================
  editIncome = (e) => {
    // console.log("this is the attribute------->", e.target.getAttribute("name"))
    // console.log('this is the id of the row===>', e.target.getAttribute("id"))
    // let planned = e.target.getAttribute("name")

    let name = e.target.getAttribute("name")
    let id = e.target.getAttribute("id")
    let val = e.target.innerHTML;
    // console.log('val', val)

    axios.post(`${process.env.REACT_APP_BASE_URL}/api/paychecks/editIncome/${id}`, {
      name,
      val
    }).then(() => {
      this.updateIncomeAmount()
    }).catch(err => {
      console.log(err)
    })
  }

  //!================== {{Delete Income Div}} =======================
  deleteIncome = (e) => {
    e.preventDefault()
    console.log("clicked")
    let id = e.target.getAttribute("id")

    axios.post(`${process.env.REACT_APP_BASE_URL}/api/paychecks/deleteIncome/${id}`)
      .then(() => {
        this.updateIncomeAmount()
      }).catch(err => {
        console.log(err)
      })
  }


  //!================== {{Toggle Form}} ===============================
  showForm = () => {
    this.setState({
      form: !this.state.form
    })
  }


  //!================== {{Toggle Delete}} ===============================


  toggleDelete = () => {
    this.setState({
      trash: !this.state.trash
    })
  }


  //!================== {{Update Income Total}} ==================================

  updateIncomeAmount = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/paychecks/${this.state.user}`)
      .then(paychecks => {
        this.setState({
          incomes: paychecks.data.response
        })
        {/* //! totalAmount() will update the state with the correct amount
        //! onClick prop is to lift the amount state up to HOME */}

        this.totalAmount()
        this.props.onClick(this.state.amount)
      })
  }



  //!================== {{ Map Total }} ====================================


  totalAmount = () => {
    let amount = 0;
    this.state.incomes.map((items) => {
      amount += Number(items.planned)
    })
    console.log('amoutnnnt', amount)
    this.setState({ amount })
  }




  render() {
    return (
      <Fragment>
        {/* //? ================== CARD SECTION ====================================== */}

        <div className="card incomeCard mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-4">

                <i data-toggle="collapse"
                  data-target="#incomeCollapse"
                  onClick={this.collapse}
                  style={{ cursor: "pointer", color: "orange" }}
                  className={`fas fa-chevron-${this.state.collapsed === true ? 'down' : 'up'}`}>
                </i>
                <strong data-toggle="collapse"
                  data-target="#incomeCollapse"
                  onClick={this.collapse}>  INCOME </strong>


              </div>
              <div className="col col-sm-4 text-right" >
                <strong>Planned</strong>
              </div>
              <div className="col col-sm-4 text-right">
                <strong>Received</strong>
              </div>
            </div>
            <div className="collapse show" id="incomeCollapse">
              <div className="card mt-2" style={{ border: "none" }}>

                {this.state.incomes.map((paychecks, i) => {
                  return (
                    <Fragment>

                      {/* //? ================== MAPPING INCOMES SECTION ====================================== */}
                      <div className="row editActive">
                        <div className="trashIcon text-left">
                          <i className="fas fa-trash-alt"
                            id={paychecks._id}
                            onClick={this.deleteIncome}>
                          </i>
                        </div>
                        <div className="col-4"
                          contentEditable="true"
                          data="name"
                          onBlur={this.editIncome}
                          id={paychecks._id}
                          name="name">

                          {paychecks.name}

                        </div>

                        <div
                          className="col text-right dollar"
                          contentEditable="true"
                          onBlur={this.editIncome}
                          id={paychecks._id}
                          name="planned" >

                          {Number(paychecks.planned).toFixed(2)}

                        </div>
                        <div className="col text-right">
                          {Number(paychecks.received).toFixed(2)}
                        </div>
                      </div>
                      <hr></hr>
                    </Fragment>
                  )
                })}


                {/* //? ========================= FORM SECTION ====================================== */}
                <form id="incomeForm"
                  className="incomeForm" style={{ display: this.state.form === true ? "inline-block" : "none" }}
                  onSubmit={this.submitHandler}>

                  <div className="row mb-2">
                    <div className="col-4">

                      <input type="text"
                        name="name"
                        placeholder="Paycheck #"
                        value={this.state.name}
                        onChange={this.eventHandler}
                        required
                        autoComplete="off" />

                    </div>

                    <div className="col col-sm-4 text-right" >

                      <input className="text-right"
                        type="number" name="planned"
                        step="any"
                        min="0"
                        placeholder="0.00"
                        value={this.state.planned}
                        onChange={this.eventHandler}
                        required
                        autoComplete="off" />

                    </div>
                    <div className="col col-sm-4 text-right">
                      <button onClick={this.showForm}
                        className="fas fa-check"
                        type="submit"
                        form="incomeForm"
                        style={{ color: "#0097a8", fontSize: "25px", borderRadius: "20px" }}>
                      </button>
                    </div>
                  </div>
                </form>

                {/* //? ==================TOTAL SECTION ====================================== */}
                <div className="row">
                  <div className="col-4">
                    <p style={{ cursor: "pointer", color: "#0097a8" }}
                      onClick={this.showForm}>
                      <i className="fas fa-plus text"></i>
                      <strong> Income</strong></p>
                  </div>
                  <div className="col col-sm-4 text-right" >
                    <strong> $ {Number(this.state.amount).toFixed(2)}</strong>
                  </div>
                  <div className="col col-sm-4 text-right">
                    <strong>$ 0.00</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Fragment>
    );
  }
}

export default Income;
