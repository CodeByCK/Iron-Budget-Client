import React, { Component, Fragment } from 'react';
// import { Button, MyVerticallyCenteredModal } from 'react-bootstrap';
import Transactions from '../Transactions/Transactions';
import Moment from 'react-moment'

class TopNav extends Component {

  state = {
    modalShow: false,
    date: Date.now()
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
              <span><strong className="h3 font-weight-bold"><Moment format="MMM" withTitle>{this.state.date}</Moment></strong>
                <label className="h3" id="year"><Moment format="YYYY" withTitle>{this.state.date}</Moment></label>
                <i onClick={this.modalClose} className="fas fa-plus-circle float-right mr-4" style={{ color: "orange", fontSize: "40px", cursor: "pointer" }}></i>
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
