import React, { Component, Fragment } from 'react';

class TopNav extends Component {
  render() {
    return (
      <Fragment>

        <div className="topNav ">

          <div className="col topNav">
            <div>
              <h3><strong>May</strong> <label id="year">2019</label>  <i style={{ color: "orange", fontSize: "15px", marginTop: "0" }} className="fas fa-chevron-down"></i></h3>
            </div>
            <div>
              <span id="leftBudget"><strong className="amount">$ {Number(this.props.amount).toFixed(2)}</strong> left to budget</span>
            </div>
          </div>
          <div className="col">

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
