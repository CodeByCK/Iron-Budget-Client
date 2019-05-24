import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Groups extends Component {
  state = {
    collapsed: false,
    groups: [],
    amount: 0,
    name: '',
    user: this.props.user,
    itemName: '',
    itemPlanned: '',
    groupId: ''
  }


  componentDidMount() {
    this.getGroup()
  }



  collapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  getGroup = () => {
    let userId = this.state.user
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/Group/${userId}`)
      .then(groups => {
        this.setState({
          groups: groups.data.response
        })
      }).catch(err => {
        console.log(err)
      })
  }
  createGroup = () => {
    let user = this.state.user
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/createGroup`, {
      user
    }).then(response => {
      this.setState({
        groups: [...this.state.groups, response.data]
      })
    }).catch(err => {
      console.log(err)
    })
  }


  editGroup = (e) => {
    // console.log(e.target.getAttribute("name"))
    // console.log(e.target.innerHTML)
    // console.log(e.target.getAttribute("id"))

    let groupId = e.target.getAttribute("id")
    let name = e.target.getAttribute("name")
    let val = e.target.innerHTML.toUpperCase()


    axios.post(`${process.env.REACT_APP_BASE_URL}/api/editGroup/${groupId}`, {
      name,
      val
    })
      .then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
  }


  deleteGroup = (e) => {
    e.preventDefault()
    console.log("clicked")
    let id = e.target.getAttribute("id")

    axios.post(`${process.env.REACT_APP_BASE_URL}/api/deleteGroup/${id}`)
      .then(() => {
        this.getGroup()
        console.log("deleted")
      }).catch(err => {
        console.log(err)
      })
  }



  render() {
    return (
      < Fragment >
        {this.state.groups.map((group, i) => {
          return (
            <div key={i} className="card incomeCard mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <div className='row'>
                      <i data-toggle="collapse"
                        data-target={`#groupCollapse${i}`}
                        onClick={this.collapse}
                        style={{ cursor: "pointer", color: "orange", marginLeft: "13px", marginRight: "5px", marginTop: "5px" }}
                        className={`fas fa-chevron-${this.state.collapsed === true ? 'down' : 'up'}`}>
                      </i>
                      <strong>

                        <div style={{ width: "100%", display: "inline-block" }}
                          data-toggle="collapse"
                          data-target={`#groupCollapse${i}`}
                          onClick={this.collapse}
                          onBlur={this.editGroup}
                          id={group._id}
                          contentEditable="true"
                          name="name">

                          {group.name}

                        </div>
                      </strong>
                    </div>



                  </div>
                  <div className="col col-sm-4 text-right" >
                    <strong>Planned</strong>
                  </div>
                  <div className="col col-sm-4 text-right">
                    <strong>Spent</strong>
                    <i style={{ float: "right", marginLeft: "10px", paddingLeft: "10px", color: "red", cursor: "pointer" }}
                      className="fas fa-minus-circle" id={group._id} onClick={this.deleteGroup}>
                    </i>
                  </div>
                </div>
                <div className="collapse show" id={`groupCollapse${i}`}>
                  <div className="card mt-2" style={{ border: "none" }}>




                    {/* //! ========================= MAP ITEMS HERE SECTION ====================================== */}









                    {/* //? ========================= FORM SECTION ====================================== */}
                    <form id="incomeForm"
                      className="incomeForm" style={{ display: this.state.form === true ? "inline-block" : "none" }}
                      onSubmit={this.submitHandler}>

                      <div className="row mb-2">
                        <div className="col-4">

                          <input type="text"
                            name="name"
                            placeholder="Paycheck #"
                            value={this.state.name}
                            onChange={this.eventHandler}
                            required
                            autoComplete="off" />

                        </div>

                        <div className="col col-sm-4 text-right" >

                          <input className="text-right"
                            type="number" name="planned"
                            min="0"
                            max="100000"
                            placeholder="0.00"
                            value={this.state.planned}
                            onChange={this.eventHandler}
                            required
                            autoComplete="off" />

                        </div>
                        <div className="col col-sm-4 text-right">
                          <button onClick={this.showForm}
                            className="fas fa-check"
                            type="submit"
                            form="incomeForm"
                            style={{ color: "#0097a8", fontSize: "25px", borderRadius: "20px" }}>
                          </button>
                        </div>
                      </div>
                    </form>

                    {/* //? ==================TOTAL SECTION ====================================== */}
                    <div className="row">
                      <div className="col-4">
                        <p style={{ cursor: "pointer", color: "#0097a8" }}
                          onClick={this.showForm}>
                          <i className="fas fa-plus text"></i>
                          <strong> Add Item</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          )
        })}
        <div className="card addGroup mb-3">
          <div className="card-body">
            <span style={{ cursor: "pointer" }}
              onClick={this.createGroup}>
              <i className="fas fa-plus text"></i>
              <strong>Add Group</strong>
            </span>
            {/* <button className="btn btn-primary" onClick={this.createGroup}> <i className="fas fa-plus text"></i></button> */}
          </div>
        </div>











        {/* 
      <div className="card incomeCard mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-4">

              <strong> INCOME </strong>
              <i data-toggle="collapse"
                data-target="#groupCollapse"
                onClick={this.collapse}
                style={{ cursor: "pointer", color: "orange" }}
                className={`fas fa-chevron-${this.state.collapsed === true ? 'down' : 'up'}`}>
              </i>

            </div>
            <div className="col col-sm-4 text-right" >
              <strong>Planned</strong>
            </div>
            <div className="col col-sm-4 text-right">
              <strong>Received</strong>
            </div>
          </div>
          <div className="collapse show" id="groupCollapse">
            <div className="card mt-2" style={{ border: "none" }}> */}


        {/* //? ========================= FORM SECTION ====================================== */}
        {/* <form id="incomeForm"
                  className="incomeForm" style={{ display: this.state.form === true ? "inline-block" : "none" }}
                  onSubmit={this.submitHandler}>

                  <div className="row mb-2">
                    <div className="col-4">

                      <input type="text"
                        name="name"
                        placeholder="Paycheck #"
                        value={this.state.name}
                        onChange={this.eventHandler}
                        required
                        autoComplete="off" />

                    </div>

                    <div className="col col-sm-4 text-right" >

                      <input className="text-right"
                        type="number" name="planned"
                        min="0"
                        max="100000"
                        placeholder="0.00"
                        value={this.state.planned}
                        onChange={this.eventHandler}
                        required
                        autoComplete="off" />

                    </div>
                    <div className="col col-sm-4 text-right">
                      <button onClick={this.showForm}
                        className="fas fa-check"
                        type="submit"
                        form="incomeForm"
                        style={{ color: "#0097a8", fontSize: "25px", borderRadius: "20px" }}>
                      </button>
                    </div>
                  </div>
                </form> */}

        {/* //? ==================TOTAL SECTION ====================================== */}
        {/* <div className="row">
                  <div className="col-4">
                    <p style={{ cursor: "pointer", color: "#0097a8" }}
                      onClick={this.showForm}>
                      <i className="fas fa-plus text"></i>
                      <strong> Income</strong></p>
                  </div>
                  <div className="col col-sm-4 text-right" >
                    <strong> $ {this.state.amount}</strong>
                  </div>
                  <div className="col col-sm-4 text-right">
                    <strong>$ 0.00</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Fragment >
    );
  }
}

export default Groups;
