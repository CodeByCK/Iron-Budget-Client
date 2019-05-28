import React, { Component, Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap'
import { Tabs, Tab } from 'react-bootstrap-tabs';
import SearchTransaction from './SearchTransaction'
import BankTransaction from './BankTransaction'
import AddTransaction from './AddTransaction'
import IncomeTransaction from './IncomeTransaction'



class Transactions extends Component {
  render() {
    return (
      <Fragment>
        <Modal
          {...this.props}

          size="lg"
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Transactions
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
              <Tab label="Add"><AddTransaction user={this.props.user} groups={this.props.groups} /></Tab>
              <Tab label="Income"><IncomeTransaction user={this.props.user} groups={this.props.groups} /></Tab>
              <Tab className="listItems" label="Search"><SearchTransaction user={this.props.user} /></Tab>
              <Tab label="Your Bank"><BankTransaction /></Tab>
            </Tabs>
          </Modal.Body>
          <Modal.Footer>
            <Button style={{ backgroundColor: "orange", borderColor: "orange" }} onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Transactions;




