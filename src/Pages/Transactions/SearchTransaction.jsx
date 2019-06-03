import React, { Component, Fragment } from 'react';
import './SearchTransaction-style.scss'
import Moment from 'react-moment'
import axios from 'axios';

class SearchTransaction extends Component {

  state = {
    transactions: []
  }



  componentDidMount() {
    this.getTransactions()
  }

  componentWillReceiveProps() {
    this.props.reload()
  }


  getTransactions = (e) => {
    let id = this.props.user
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/transactions/${id}`)
      .then(response => {
        // console.log(response.data)
        this.setState({
          transactions: response.data
        })

      }).catch(err => {
        console.log(err)
      })
  }



  deleteTransaction = (e) => {
    e.preventDefault()
    let id = e.target.getAttribute('id')
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/deleteTransaction/${id}`)
      .then(() => {
        this.getTransactions()
        this.props.reload()
        // alert("deleted")
      }).catch(err => {
        console.log(err)
      })

  }



  render() {
    return (
      <Fragment>
        {this.state.transactions.map((item, i) => {
          return (


            <div className="card mt-2 tCard">

              <div className="row" >
                <div className="col-3">
                  <span className="month text-right"><Moment format="MMM" withTitle>{item.date}</Moment></span>
                  <br></br>
                  <span className="day text-right"><Moment format="DD" withTitle>{item.date}</Moment></span>
                </div>
                <div className="col-5 text-center">
                  <div className="card-block">
                    <div className="card-title">
                      <span className="tTitle">{item.name}</span>
                    </div>
                    <p></p>
                  </div>
                </div>
                <div className="col mt-2 ">
                  <span className="tAmount float-right">$ {Number(item.amount).toFixed(2)}
                    <i onClick={this.deleteTransaction}
                      id={item._id}
                      style={{ color: "red", fontSize: "0.9em", cursor: "pointer" }}
                      className="fas fa-minus-circle ml-2">
                    </i>
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </Fragment>
    );
  }
}

export default SearchTransaction;
