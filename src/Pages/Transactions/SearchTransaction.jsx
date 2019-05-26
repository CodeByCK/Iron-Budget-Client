import React, { Component, Fragment } from 'react';
import axios from 'axios';

class SearchTransaction extends Component {

  state = {
    transactions: []
  }



  componentDidMount() {
    this.getTransactions()
  }


  getTransactions = () => {
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



  render() {
    return (
      <Fragment>

        {this.state.transactions.map((item, i) => {
          return (

            <li><p>{item.name}---- {item.date}</p></li>

          )
        })}
      </Fragment>
    );
  }
}

export default SearchTransaction;
