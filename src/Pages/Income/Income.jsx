import React, { Component, Fragment } from 'react';
import axios from "axios"
import { runInNewContext } from 'vm';

class Income extends Component {
  state = {
    name: '',
    planned: '',
    user: this.props.user,
    incomes: [],
    collapsed: false,
    hovered: false,
    text: '',
    contentEditable: true,
    form: false,
    editActive: false,
    amount: 0


  }

  componentDidMount() {

    this.updateIncomeAmount()

  }


  eventHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  submitHandler = (e) => {
    e.preventDefault()
    let newIncome = {
      userId: this.state.user,
      name: this.state.name,
      planned: Number(this.state.planned)
    }
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/newPaycheck`, newIncome)
      .then(response => {
        console.log("submitted", response.data)
        this.setState({
          incomes: [...this.state.incomes, response.data],
          name: "",
          planned: ""
        })
      })
  }

  collapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

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



  showForm = () => {
    this.setState({
      form: !this.state.form
    })
  }



  editActive = () => {
    this.setState({
      editActive: !this.state.editActive
    })
  }




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

        <div className="card incomeCard">
          <div className="card-body">
            <div className="row">
              <div className="col-4">

                <strong> INCOME </strong>
                <i data-toggle="collapse"
                  data-target="#incomeCollapse"
                  onClick={this.collapse}
                  style={{ cursor: "pointer", color: "orange" }}
                  className={`fas fa-chevron-${this.state.collapsed === true ? 'down' : 'up'}`}>
                </i>

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
                        <div className="col-4"
                          contentEditable="true"
                          data="name"
                          onBlur={this.editIncome}
                          id={paychecks._id}

                          // onKeyUp={this.typeText}

                          name="name">
                          {/* {this.state.text} */}
                          {paychecks.name}

                        </div>
                        <div
                          className="col col-sm-4 text-right dollar"
                          contentEditable="true"
                          onBlur={this.editIncome}
                          id={paychecks._id}
                          name="planned" >

                          {paychecks.planned}

                        </div>
                        <div className="col col-sm-4 text-right">
                          $ 0.00
                      </div>
                      </div>
                      <hr></hr>
                    </Fragment>
                  )
                })}


                {/* //? ========================= FORM SECTION ====================================== */}
                <form style={{ display: this.state.form === true ? "inline-block" : "none" }} onSubmit={this.submitHandler}>
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
                        min="0"
                        max="100000"
                        placeholder="0.00"
                        value={this.state.planned}
                        onChange={this.eventHandler}
                        required
                        autoComplete="off" />

                    </div>
                    <div className="col col-sm-4 text-right">
                      <button onClick={this.showForm} className="btn-sm btn-primary " type="submit">SUBMIT</button>
                    </div>
                  </div>
                </form>

                {/* //? ==================TOTAL SECTION ====================================== */}
                <div className="row">
                  <div className="col-4">
                    <p style={{ cursor: "pointer", color: "blue" }} onClick={this.showForm}><i className="fas fa-plus text"></i><strong>Add Paycheck</strong></p>
                  </div>

                  <div className="col col-sm-4 text-right" >
                    <strong> $ {this.state.amount}</strong>
                  </div>

                  <div className="col col-sm-4 text-right">
                    0
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
