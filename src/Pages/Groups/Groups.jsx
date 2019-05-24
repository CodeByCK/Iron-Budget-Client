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
    groupId: '',
    form: false,
    itemAmount: 0
  }


  // componentDidMount() {

  //   this.getGroup()
  //   // this.totalItemAmount()
  // }



  collapse = () => {

    this.setState({
      collapsed: !this.state.collapsed
    })

  }



  getGroup = () => {
    let userId = this.state.user

    axios.get(`${process.env.REACT_APP_BASE_URL}/api/Group/${userId}`)
      .then(groups => {
        console.log(groups)
        this.setState({
          groups: groups.data.response
        })
        // this.totalItemAmount()
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
    // console.log("name", e.target.getAttribute("name"))
    // console.log("Inniter HTML-->", e.target.innerHTML)
    // console.log("id-------------->", e.target.getAttribute("id"))

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

  createItem = (e) => {
    e.preventDefault()
    let groupId = this.state.groupId
    let name = this.state.itemName
    let planned = this.state.itemPlanned

    axios.post(`${process.env.REACT_APP_BASE_URL}/api/createItem/`, {
      groupId,
      name,
      planned
    }).then(response => {
      console.log(response)
      this.setState({
        groups: [...this.state.groups, response.data]
      })
    }).catch(err => {
      console.log(err)
    })
  }



  editItem = (e) => {
    // console.log("name", e.target.getAttribute("name"))
    // console.log("Inniter HTML-->", e.target.innerHTML)
    // console.log("id-------------->", e.target.getAttribute("id"))

    let itemId = e.target.getAttribute("id")
    let name = e.target.getAttribute("name")
    let val = e.target.innerHTML


    axios.post(`${process.env.REACT_APP_BASE_URL}/api/editItem/${itemId}`, {
      name,
      val
    })
      .then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
  }





  deleteItem = (e) => {
    let id = e.target.getAttribute('id')
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/deleteItem/${id}`)
      .then(() => {
        // this.updateIncomeAmount()
        this.getGroup()
      }).catch(err => {
        console.log(err)
      })
  }



  showForm = (e) => {
    this.setState({
      groupId: e.target.getAttribute("id"),
      form: !this.state.form
    })
  }

  eventHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  // totalItemAmount = () => {
  //   let amount = 0;
  //   this.state.groups((group, i) => {
  //     // group.items((item, i) => {
  //     console.log("-------------total----------------", group)
  //     // })
  //   })
  //   // console.log('amoutnnnt', amount)
  //   // this.setState({ itemAmount: amount })
  // }


  render() {

    return (
      <Fragment>
        {/* {this.totalItemAmount()} */}
        {/* {this.state.itemAmount} */}
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




                    {/* //! ========================= MAPPING ITEMS ====================================== */}

                    {/* {group.items.map((item, i) => { Put into different component
                      return (
                        <Fragment>
                          <div className="row editActive">
                            <div className="trashIcon text-left">

                              <i className="fas fa-trash-alt"
                                id={item._id}
                                onClick={this.deleteItem}>
                              </i>
                            </div>

                            <div
                              className="col-4"
                              contentEditable="true"
                              data="name"
                              onBlur={this.editItem}
                              id={item._id}
                              name="name">
                              {item.name}
                            </div>

                            <div
                              className="col text-right dollar"
                              contentEditable="true"
                              onBlur={this.editItem}
                              id={item._id}
                              name="planned">

                              {item.planned}

                            </div>

                            <div className="col text-right">
                              0
                        </div>
                          </div>
                          <hr></hr>
                        </Fragment>
                      )
                    })}
 */}


                    {/* //? ========================= FORM SECTION ====================================== */}
                    <form id="itemForm"
                      className="incomeForm" style={{ display: this.state.form === true ? "inline-block" : "none" }}
                      onSubmit={this.createItem}>

                      <div className="row mb-2">
                        <div className="col-4">

                          <input
                            type="text"
                            name="itemName"
                            placeholder="ex. Gas"

                            value={this.state.itemName}
                            onChange={this.eventHandler}
                            required
                            autoComplete="off" />

                        </div>

                        <div className="col col-sm-4 text-right" >

                          <input
                            className="text-right"
                            type="number"
                            name="itemPlanned"
                            min="0"
                            max="100000"
                            placeholder="0.00"
                            value={this.state.planned}
                            onChange={this.eventHandler}
                            required
                            autoComplete="off" />

                        </div>
                        <div className="col col-sm-4 text-right">
                          <button
                            id={group._id}
                            onClick={this.showForm}
                            className="fas fa-check"
                            type="submit"
                            form="itemForm"
                            style={{ color: "#0097a8", fontSize: "25px", borderRadius: "20px" }}>
                          </button>
                        </div>
                      </div>
                    </form>

                    {/* //? ==================Add Item SECTION ====================================== */}
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
      </Fragment>
    );
  }
}

export default Groups;
