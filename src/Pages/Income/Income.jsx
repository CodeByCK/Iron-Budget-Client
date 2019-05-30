import React, { Component, Fragment } from 'react';
import ContentEditable from "react-sane-contenteditable";
import axios from "axios"

class Income extends Component {
  state = {
    name: 'Paycheck',
    planned: 0,
    received: [],
    user: this.props.user,
    incomes: [],
    collapsed: false,
    hovered: false,
    text: '',
    contentEditable: true,
    form: false,
    editActive: false,
    trash: true,
    amount: 0,
    id: '',
    receivedTotal: 0.00
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
        console.log(paychecks, 3434)
        this.setState({
          incomes: paychecks.data.response
        }, () => this.totalReceived())
        {/* //! totalAmount() will update the state with the correct amount
        //! onClick prop is to lift the amount state up to HOME */}
        // this.getSpentAmount()
        this.totalAmount()
        this.props.onClick(this.state.amount)
        // this.totalReceived()
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




  totalReceived = (id) => {
    let amount = 0;
    this.state.incomes.map((income) => {
      if (income._id === id)
        income.received.map(received => {
          amount += received
        })
    })
    return amount
  }



  ReceivedAmount = () => {
    let amount = 0;
    this.state.incomes.map((income) => {
      income.received.map(received => {
        amount += received
      })
    })
    return amount
  }


  handleEnter = (e) => {
    const keyCode = e.keyCode || e.which
    const string = String.fromCharCode(keyCode).toUpperCase()
    const regex = /[A-Za-z0-9 ]/

    if (!regex.test(string)) {
      e.returnValue = false
      if (e.preventDefault) e.preventDefault()
    }
  }



  handleEnterNumberOnly = (e) => {
    const keyCode = e.keyCode || e.which
    const string = String.fromCharCode(keyCode)
    const regex = /[0-9]|\./

    if (!regex.test(string)) {
      e.returnValue = false
      if (e.preventDefault) e.preventDefault()
    }
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
                        {/* <div 
                        className="col-4"
                          contentEditable="true"
                          data="name"
                          onBlur={this.editIncome}
                          id={paychecks._id}
                          name="name"
                          >

                          {paychecks.name}

                        </div> */}

                        <ContentEditable
                          className="col-4"
                          data="name"
                          onBlur={this.editIncome}
                          onKeyPress={this.handleEnter}
                          id={paychecks._id}
                          name="name"
                          content={paychecks.name}
                          maxLength={10}
                          multiLine={false}
                        />

                        {/* <div
                          className="col text-right dollar"
                          contentEditable="true"
                          onBlur={this.editIncome}
                          id={paychecks._id}
                          name="planned" 
                          >

                          {Number(paychecks.planned).toFixed(2)}

                        </div> */}

                        <ContentEditable
                          className="col text-right dollar"
                          onBlur={this.editIncome}
                          id={paychecks._id}
                          name="planned"
                          onKeyPress={this.handleEnterNumberOnly}
                          content={Number(paychecks.planned).toFixed(2)}
                          maxLength={10}
                          multiLine={false}
                        />

                        <div className="col text-right"
                          id={paychecks._id}
                          style={{ color: "green" }}>

                          $ {this.totalReceived(paychecks._id).toFixed(2)}

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

                      <input
                        type="text"
                        name="name"
                        maxlength="10"
                        placeholder="Paycheck #"
                        value={this.state.name}
                        onKeyPress={this.handleEnter}
                        onChange={this.eventHandler}
                        required
                        autoComplete="off" />

                    </div>

                    <div className="col col-sm-4 text-right" >

                      <input
                        className="text-right"
                        type="number"
                        name="planned"
                        step="any"
                        min="0"
                        max="1000000000"
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
                    <strong>$ {Number(this.ReceivedAmount()).toFixed(2)}</strong>
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
