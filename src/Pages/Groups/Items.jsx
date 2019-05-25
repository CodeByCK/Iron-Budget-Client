import React, { Component, Fragment } from 'react';

class Items extends Component {



  render() {
    // console.log(this.props)
    return (
      <Fragment>
        <div className="row editActive">
          <div className="trashIcon text-left">

            <i className="fas fa-trash-alt"
              id={this.props._id}
              onClick={this.props.delete}>
            </i>
          </div>

          <div
            className="col-4"
            contentEditable="true"
            data="name"
            onBlur={this.props.delete}
            id={this.props._id}
            name="name">
            {this.props.name}
          </div>

          <div
            className="col text-right dollar"
            contentEditable="true"
            onBlur={this.props.delete}
            id={this.props._id}
            name="planned">

            {this.props.planned}

          </div>

          <div className="col text-right">
            0
          </div>
        </div>
        <hr></hr>
      </Fragment>
    )
  }
}

export default Items;
