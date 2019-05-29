import React, { Component, Fragment } from 'react';
import axios from 'axios'

class IncomeTransaction extends Component {

  state = {
    incomes: [],
    amount: null,
    date: null,
    name: '',
    incomeId: '',
    user: this.props.user
  }

  componentDidMount() {
    this.getIncome()
  }


  eventHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  createTransaction = (e) => {
    e.preventDefault()
    let date = this.state.date
    let name = this.state.name
    let incomeId = this.state.incomeId
    let amount = Number.parseFloat(this.state.amount)
    let userId = this.props.user

    axios.post(`${process.env.REACT_APP_BASE_URL}/api/createIncomeTransaction/`, {
      date, name, incomeId, amount, userId
    }).then(response => {
      this.setState({
        amount: 0,
        date: null,
        name: '',
        incomeId: ''
      }, () => this.props.reload())
      // console.log(response)
    }).catch(err => {
      // console.log(err)
    })
  }



  getIncome = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/paychecks/${this.state.user}`)
      .then(paychecks => {
        this.setState({
          incomes: paychecks.data.response
        })
      })
  }


  render() {
    return (
      <Fragment>
        <form className="mt-3" onSubmit={this.createTransaction}>
          <div className="form-group">
            <input
              type="Number"
              min="0"
              autoComplete="off"
              step="any"
              value={this.state.amount}
              onChange={this.eventHandler}
              className="form-control text-center"
              name="amount"
              placeholder="$ 0.00"
              required />
          </div>

          <div className="form-row">
            <div className="col">
              <input
                type="date"
                value={this.state.date}
                onChange={this.eventHandler}
                className="form-control input-group date"
                name="date"
                placeholder="Date"
                required />
            </div>



            <div className="col">
              <input
                type="text"
                value={this.state.name}
                onChange={this.eventHandler}
                className="form-control"
                name="name"
                autoComplete="off"
                placeholder="Name "
                required />
            </div>
          </div>

          <div className="form-row mt-3">
            <select name="incomeId" value={this.state.incomeId} onChange={this.eventHandler} className="form-control" required>
              <option required selected>(Choose Income Item)</option>
              {this.state.incomes.map((income, i) => {
                return (
                  <option value={income._id} key={i}>{income.name}</option>
                )

              })}
            </select>

          </div>
          <div className="text-center">
            <button onChange={this.eventHandler} type="submit" className="btn btn-danger btn-sm mt-2">SUBMIT</button>
          </div>

        </form>
      </Fragment>
    );
  }
}

export default IncomeTransaction;
