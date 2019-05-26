import React, { Component, Fragment } from 'react';
import axios from 'axios'
// import { Modal, Button } from 'react-bootstrap'
// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css";

class AddTransaction extends Component {

  state = {
    amount: null,
    date: null,
    items: [],
    name: '',
    itemId: ''

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
    let itemId = this.state.itemId
    let amount = Number.parseFloat(this.state.amount)

    axios.post(`${process.env.REACT_APP_BASE_URL}/api/createTransaction/`, {
      date, name, itemId, amount
    }).then(response => {
      this.setState({
        amount: 0,
        date: null,
        name: '',
        itemId: ''
      })
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }


  render() {
    // this.getItems()

    return (
      <Fragment>
        <form className="mt-3" onSubmit={this.createTransaction}>
          <div className="form-group">
            <input type="Number" min="0"
              step="any"
              value={this.state.amount}
              onChange={this.eventHandler}
              className="form-control text-center" name="amount" placeholder="$ 0.00" required />
          </div>

          <div className="form-row">
            <div className="col">
              <input type="date" value={this.state.date} onChange={this.eventHandler} className="form-control input-group date" name="date" placeholder="Date" />
            </div>



            <div className="col">
              <input type="text" value={this.state.name} onChange={this.eventHandler} className="form-control" name="name" placeholder="Name " />
            </div>
          </div>

          <div className="form-row mt-3">
            <select name="itemId" value={this.state.itemId} onChange={this.eventHandler} className="form-control">
              <option selected>Choose Budget Item</option>
              {this.props.groups.map((groups, i) => {
                return groups.items.map((item, i) => {
                  console.log("============>", item)
                  return (
                    <option value={item._id} key={i}>{item.name}</option>
                  )
                })
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

export default AddTransaction;
