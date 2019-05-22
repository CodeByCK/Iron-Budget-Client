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
    hovered: false

  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/paychecks/${this.state.user}`)
      .then(paychecks => {
        this.setState({
          incomes: paychecks.data.response
        })
      })
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
    // console.log(e.target.getAttribute("name"))
    console.log(e.target.getAttribute("name"))
    console.log(e.target.getAttribute("id"))

    let name = e.target.getAttribute("name")
    // let planned = e.target.getAttribute("name")
    let id = e.target.getAttribute("id")
    let val = e.target.innerHTML;
    console.log('val', val)

    axios.post(`${process.env.REACT_APP_BASE_URL}/api/paychecks/editIncome/${id}`, {
      name,
      val
    }).then(console.log("submited"))
      .catch(err => {
        console.log(err)
      })
  }




  render() {
    // console.log("TESTTTTTTTT", this.state.incomes)
    return (
      <Fragment>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="name" placeholder="Paycheck #" value={this.state.name} onChange={this.eventHandler} required autoComplete="off" />
          <input type="number" name="planned" placeholder="0.00" value={this.state.planned} onChange={this.eventHandler} required autoComplete="off" />
          <button type="submit">SUBMIT</button>
        </form>
        {/* {this.state.incomes.map((paychecks, i) => {
          return (
            <li key={i}>{paychecks.name} Planned: {paychecks.planned}</li>
          )
        })} */}



        <div className="card incomeCard">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <i className="fas fa-money-bill-alt" style={{ color: "green" }}></i><strong> INCOME</strong> <i data-toggle="collapse" data-target="#incomeCollapse" onClick={this.collapse} style={{ cursor: "pointer" }} className={`fas fa-chevron-circle-${this.state.collapsed === true ? 'down' : 'up'}`}></i>
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
                      <div className="row">
                        <div className="col" contentEditable="true" data="name" onBlur={this.editIncome} id={paychecks._id} name="name">
                          {paychecks.name}
                        </div>
                        <div className="col col-sm-4 text-right" contentEditable="true" onBlur={this.editIncome} id={paychecks._id} name="planned" >
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
              </div>
            </div>
          </div>
        </div>






      </Fragment>
    );
  }
}

export default Income;
