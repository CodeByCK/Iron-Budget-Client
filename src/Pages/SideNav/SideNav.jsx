import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class SideNav extends Component {

  state = {
    isMenuOpen: false
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }


  render() {

    return (
      <Fragment>
        <i className="fas fa-bars" onMouseOver={this.toggleMenu} style={{ fontSize: "2rem", cursor: "pointer" }}></i>
        <div className={`sidebar-menu${this.state.isMenuOpen === true ? ' open' : ''}`}>
          <button type="button" className="button small float-right text-white" onClick={this.toggleMenu}>X</button>

          <h3 onClick={this.props.logout} style={{ cursor: "pointer", color: "blue" }}>LOG OUT</h3>

        </div>
      </Fragment>
    )
  }
}

export default SideNav;
