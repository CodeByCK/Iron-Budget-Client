import React, { Component, Fragment } from 'react';
import SideNav from './SideNav/SideNav'
import Income from './Income/Income'
import fire from 'firebase'

class Home extends Component {





    //Logout 
    logout = () => {
        fire.auth().signOut()
    }



    render() {

        // console.log("FROM HOME============", this.state.user)
        return (

            <Fragment>
                <SideNav logout={this.logout} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-7">
                            <h1 className="text-center">YOU ARE LOGGED IN</h1>
                            <br></br>
                            <h1 className="text-center">INCOME FORM</h1>
                            <Income user={this.props.user} />
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>




            </Fragment>
        );
    }
}

export default Home;
