import React, { Component, Fragment } from 'react';
import { Button, MyVerticallyCenteredModal } from 'react-bootstrap';
import Transactions from '../Transactions/Transactions';

class TopNav extends Component {

  state = {
    modalShow: false
  }


  modalClose = () => {
    this.setState({ modalShow: !this.state.modalShow });
  }

  render() {

    return (
      <Fragment>
        <Transactions
          user={this.props.user}
          groups={this.props.groups}
          show={this.state.modalShow}
          onHide={this.modalClose}
          reload={this.props.reload}
        />
        <div className="topNav ">

          <div className="col topNav">
            <div>
              <span><strong className="h3 font-weight-bold">May</strong>
                <label className="h3" id="year">2019</label>  <i style={{ color: "orange", fontSize: "15px", marginTop: "0" }} className="fas fa-chevron-down"></i>
                <i onClick={this.modalClose} className="fas fa-plus-circle float-right mr-4" style={{ color: "orange", fontSize: "40px" }}></i>
              </span>
            </div>
            <div>
              <span id="leftBudget">
                <strong className="amount">
                  $ {Number(this.props.amount - this.props.groupAmount).toFixed(2)}
                </strong> <span style={{ color: "orange" }}>left to budget</span> <p className="float-right">Transactions</p>
              </span>
            </div>
          </div>

          <hr></hr>
        </div>
      </Fragment >
    );
  }
}

export default TopNav;
