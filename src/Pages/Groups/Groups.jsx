import React, { Component, Fragment } from 'react';
import ContentEditable from "react-sane-contenteditable";
import Items from './Items'
import axios from 'axios';


class Groups extends Component {
  state = {
    collapsed: false,
    items: this.props.group.items,
    amount: 0,
    name: '',
    user: this.props.user,
    itemName: '',
    itemPlanned: '',
    groupId: '',
    form: false,
  }

  collapse = () => {

    this.setState({
      collapsed: !this.state.collapsed
    })

  }


  editGroup = (e) => {
    let groupId = e.target.getAttribute("id")
    let name = e.target.getAttribute("name")
    let val = e.target.innerHTML.toUpperCase()


    axios.post(`${process.env.REACT_APP_BASE_URL}/api/editGroup/${groupId}`, {
      name,
      val
    })
      .then(response => {
        // console.log(response)
      }).catch(err => {
        // console.log(err)
      })
  }


  createItem = (e) => {
    // console.log('in create!')
    e.preventDefault()
    let groupId = e.target.getAttribute('id')
    let name = this.state.itemName
    let planned = Number.parseFloat(this.state.itemPlanned)

    // console.log(groupId, name, planned)

    axios.post(`${process.env.REACT_APP_BASE_URL}/api/createItem/`, {
      groupId,
      name,
      planned
    }).then(response => {
      console.log(response)

      this.setState({
        items: [...this.state.items, { groupId: groupId, name: name, planned: planned }]
      }, () => { this.props.reload() })
    }).catch(err => {
      // console.log(err)
    })
    this.showForm()
    //this.props.itemRefresh();

  }



  editItem = (e) => {
    let itemId = e.target.getAttribute("id")
    let name = e.target.getAttribute("name")
    let val = e.target.innerHTML

    axios.post(`${process.env.REACT_APP_BASE_URL}/api/editItem/${itemId}`, {
      name,
      val
    })
      .then(response => {
        this.props.reload()
      }).catch(err => {
        // console.log(err)
      })
  }





  deleteItem = (e) => {
    e.preventDefault()
    let id = e.target.getAttribute('id')
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/deleteItem/${id}`)
      .then(items => {

        let itemCopy = [...this.state.items]
        itemCopy.forEach((item, i) => {
          if (item._id === id) {
            itemCopy.splice(i, 1)
          }
        })
        this.setState({
          items: itemCopy
        })
        this.props.calculateTotal()
        this.props.reload()

        // console.log(items)

      }).catch(err => {
        // console.log(err)
      })
    // this.forceUpdate()
  }



  showForm = (e) => {
    // console.log('in show form')
    this.setState({
      form: !this.state.form
    })
  }


  eventHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // handleEnter = (e) => {
  //   let regex= /[^A-Za-z0-9]/

  //   if (e.charCode == 13) {
  //     e.preventDefault()
  //     this.editGroup(e)
  //   }
  // }

  handleEnter = (e) => {
    const keyCode = e.keyCode || e.which
    const string = String.fromCharCode(keyCode).toUpperCase()
    const regex = /[A-Za-z0-9 ]/

    if (!regex.test(string)) {
      e.returnValue = false
      if (e.preventDefault) e.preventDefault()
    }
  }


  //For Items Component
  handleEnterNumberOnly = (e) => {
    const keyCode = e.keyCode || e.which
    const string = String.fromCharCode(keyCode)
    const regex = /[0-9]|\./

    if (!regex.test(string)) {
      e.returnValue = false
      if (e.preventDefault) e.preventDefault()
    }
  }




  render() {
    return (
      <Fragment>

        <div key={this.props.i} className="card incomeCard mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <div className='row'>
                  <i data-toggle="collapse"
                    data-target={`#groupCollapse${this.props.i}`}
                    onClick={this.collapse}
                    style={{ cursor: "pointer", color: "orange", marginLeft: "13px", marginRight: "5px", marginTop: "5px" }}
                    className={`fas fa-chevron-${this.state.collapsed === true ? 'down' : 'up'}`}>
                  </i>
                  <strong>
                    {/* //! CONTENT EDITABLE COMPONENT */}
                    <ContentEditable
                      style={{ width: "100%", display: "inline-block", cursor: "pointer" }}

                      content={this.props.group.name}
                      data-toggle="collapse"
                      data-target={`#groupCollapse${this.props.i}`}
                      onClick={this.collapse}
                      onBlur={this.editGroup}
                      id={this.props.group._id}
                      onKeyPress={this.handleEnter}
                      name="name"
                      maxLength={8}
                      multiLine={false}
                    />
                    {/* //! CONTENT EDITABLE COMPONENT */}
                  </strong>
                </div>
              </div>
              <div className="col col-sm-4 text-right" >
                <strong>Planned</strong>
              </div>
              <div className="col col-sm-4 text-right">
                <strong>Spent</strong>
                <i style={{ float: "right", marginLeft: "10px", paddingLeft: "10px", color: "red", cursor: "pointer" }}
                  className="fas fa-minus-circle" id={this.props.group._id} onClick={this.props.deleteGroup}>
                </i>
              </div>
            </div>
            <div className="collapse show" id={`groupCollapse${this.props.i}`}>
              <div className="card mt-2" style={{ border: "none" }}>

                {/* //! ========================= MAPPING ITEMS ====================================== */}

                {this.state.items.map((item, i) => {
                  return (
                    <Items {...item} edit={this.editItem} delete={this.deleteItem} handleEnter={this.handleEnter} handleNumber={this.handleEnterNumberOnly} />
                  )
                })}

                {/* //? ========================= FORM SECTION ====================================== */}
                <form
                  className="incomeForm" style={{ display: this.state.form === true ? "inline-block" : "none" }}
                  onSubmit={this.createItem}>

                  <div className="row mb-2">
                    <div className="col-4">

                      <input
                        type="text"
                        name="itemName"
                        maxlength="10"
                        placeholder="ex. Gas"
                        defaultValue={this.state.itemName}
                        onKeyPress={this.handleEnter}
                        onChange={this.eventHandler}
                        autoComplete="off" />

                    </div>

                    <div className="col col-sm-4 text-right" >

                      <input
                        className="text-right"
                        type="number"
                        name="itemPlanned"
                        min="0"
                        step="any"
                        placeholder="0.00"
                        defaultValue={this.state.planned}
                        onChange={this.eventHandler}
                        autoComplete="off" />

                    </div>
                    <div className="col col-sm-4 text-right">
                      <button
                        id={this.props.group._id}
                        onClick={this.createItem}
                        className="fas fa-check"
                        type="submit"
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
      </Fragment>
    );
  }
}

export default Groups;
