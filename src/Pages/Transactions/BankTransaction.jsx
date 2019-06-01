import React, { Component, Fragment } from 'react';
import PlaidLink from 'react-plaid-link'


class BankTransaction extends Component {


  handleOnSuccess(token, metadata) {
    // send token to client server
  }

  handleOnExit() {
    // handle the case when your user exits Link
  }

  componentDidMount() {

  }


  render() {
    return (
      <Fragment>
        <h5 className="text-center mt-2">Bank Transaction</h5>
        <PlaidLink
          clientName="Your app name"
          env="sandbox"
          product={["auth", "transactions"]}
          publicKey="614be98f819e9bd8d0db9abec1c08a"
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}>
          Open Link and connect your bank!
      </PlaidLink>
      </Fragment>
    );
  }
}

export default BankTransaction;
