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
        <i className="fas fa-chevron-right ml-3 mt-3" onMouseOver={this.toggleMenu} style={{ fontSize: "1rem", cursor: "pointer" }}></i>
        <div className={`sidebar-menu${this.state.isMenuOpen === true ? ' open' : ''}`}>
          <button type="button" className="button small float-right text-white" onClick={this.toggleMenu}><h3>X</h3></button>

          <div className="container">
            <div ClassName="row">
              <div className="footer">

                <i onClick={this.props.logout} className="fas fa-sign-out-alt signout-logo"></i>
                <br></br>
                <div className="logout">
                  LOG OUT
              </div>
              </div>
            </div>
          </div>

        </div>
      </Fragment>
    )
  }
}

export default SideNav;
