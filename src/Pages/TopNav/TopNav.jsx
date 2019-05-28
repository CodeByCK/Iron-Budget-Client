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
                  $ {Number(this.props.amount).toFixed(2)}
                </strong> <span style={{ color: "orange" }}>left to budget</span> <p className="float-right">Transactions</p>
              </span>
            </div>
          </div>

          <hr></hr>
        </div>

        {/* <div className="conatiner">
          <nav class=" navbar-light bg-light fixed-top">
            <span class="navbar-item mb-0 h3">
              <div className="col-6">May 2019
              </div>
              {this.props.amount} left to budget
              </span>

            <span className="navbar-item mb-0 text-center float-right">
              <div className="col-6">
                <i class="fas fa-plus-circle" style={{ color: "orange", fontSize: "30px" }}></i>
              </div>Add Transaction
              </span>
          </nav>
        </div> */}



        {/* 
        <div className="container">
          <nav className="navbar-light bg-light fixed-top">
            <div className="row">
              <div className="col-6">
                <h1>{this.props.amount} left to budget</h1>

              </div>
              <div className="col-6 float-right">
                <i class="fas fa-plus-circle" style={{ color: "orange", fontSize: "30px" }}></i>
              </div>
            </div>
          </nav>
        </div> */}

      </Fragment >
    );
  }
}

export default TopNav;
