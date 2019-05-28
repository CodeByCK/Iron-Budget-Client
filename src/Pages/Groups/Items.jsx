import React, { Component, Fragment } from 'react';
import axios from 'axios'

class Items extends Component {

  state = {
    id: this.props._id,
    transactions: [],
    spent: 0.00
  }


  componentWillReceiveProps() {
    this.getSpentAmount()
  }



  getSpentAmount = () => {
    let id = this.state.id
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/getTransaction/${id}`)
      .then(response => {
        this.setState({
          transactions: response.data
        }, () => this.totalAmount())
      }).catch(err => {
        console.log(err)
      })
  }


  totalAmount = () => {
    let amount = 0;
    if (this.state.transactions.length > 0) {
      this.state.transactions.map((items) => {
        amount += Number(items.amount)
      })
      // console.log('amoutnnnt', amount)
      this.setState({
        spent: amount
      })
    }

  }


  render() {
    return (
      <Fragment>
        <div className="row editActive">
          <div className="trashIcon text-left">

            <i className="fas fa-trash-alt"
              id={this.props._id}
              onClick={this.props.delete}>
            </i>
          </div>

          <div
            className="col-4"
            contentEditable="true"
            data="name"
            onBlur={this.props.edit}
            id={this.props._id}
            name="name">
            {this.props.name}
          </div>

          <div
            className="col text-right dollar"
            contentEditable="true"
            onBlur={this.props.edit}
            id={this.props._id}
            name="planned">

            {Number(this.props.planned).toFixed(2)}

          </div>
          <div className="col text-right"
            style={{
              color: Number(this.state.spent * -1) > this.props.planned ? "red" : "green",
              fontWeight: 500
            }}>
            $ {Number(this.state.spent * -1).toFixed(2)}
          </div>
        </div>
        <hr></hr>
      </Fragment>
    )
  }
}

export default Items;
