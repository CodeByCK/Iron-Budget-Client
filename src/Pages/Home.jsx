import React, { Component, Fragment } from 'react';
import SideNav from './SideNav/SideNav'
import Income from './Income/Income'
import fire from 'firebase'

class Home extends Component {


    state = {
        amount: null
    }


    //Logout 
    logout = () => {
        fire.auth().signOut()
    }

    retrieveAmount = (amount) => {
        console.log('retrieved', amount)
        this.setState({ amount })
    }

    render() {

        // console.log("FROM HOME============", this.state.user)
        return (

            <Fragment>
                <SideNav logout={this.logout} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <h1>{this.state.amount}</h1>
                        </div>
                        <div className="col-md-7">
                            <h1 className="text-center">YOU ARE LOGGED IN</h1>
                            <br></br>
                            <h1 className="text-center">INCOME FORM</h1>
                            <Income user={this.props.user} onClick={this.retrieveAmount} />
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
