import React, { Component, Fragment } from 'react';
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
    itemAmount: 0
  }

  componentDidMount() {

  }

  collapse = () => {

    this.setState({
      collapsed: !this.state.collapsed
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


  createItem = (e) => {

    console.log('in create!')
    e.preventDefault()
    let groupId = e.target.getAttribute('id')
    let name = this.state.itemName
    let planned = this.state.itemPlanned

    console.log(groupId, name, planned)

    axios.post(`${process.env.REACT_APP_BASE_URL}/api/createItem/`, {
      groupId,
      name,
      planned
    }).then(response => {
      console.log(response)

      this.setState({
        items: [...this.state.items, { groupId: groupId, name: name, planned: planned }]
      })

    }).catch(err => {
      console.log(err)
    })
    this.showForm()
    //this.props.itemRefresh();

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

        console.log(items)

      }).catch(err => {
        console.log(err)
      })
    this.forceUpdate()
  }



  showForm = (e) => {
    console.log('in show form')
    this.setState({
      // groupId: e.target.getAttribute("id"),
      form: !this.state.form
    })

  }

  eventHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {

    console.log('$$$$$$$$$', this)

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

                    <div style={{ width: "100%", display: "inline-block", cursor: "pointer" }}
                      data-toggle="collapse"
                      data-target={`#groupCollapse${this.props.i}`}
                      onClick={this.collapse}
                      onBlur={this.editGroup}
                      id={this.props.group._id}
                      contentEditable="true"
                      name="name">

                      {this.props.group.name}

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
                  className="fas fa-minus-circle" id={this.props.group._id} onClick={this.props.deleteGroup}>
                </i>
              </div>
            </div>
            <div className="collapse show" id={`groupCollapse${this.props.i}`}>
              <div className="card mt-2" style={{ border: "none" }}>




                {/* //! ========================= MAPPING ITEMS ====================================== */}

                {this.state.items.map((item, i) => {
                  return (
                    <Items {...item} delete={this.deleteItem} />
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
                        placeholder="ex. Gas"
                        value={this.state.itemName}
                        onChange={this.eventHandler}
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


        {/* //})} */}

      </Fragment>
    );
  }
}

export default Groups;
