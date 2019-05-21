import React, { Component, Fragment } from 'react';
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
                <button onClick={this.logout}>LOG OUT</button>
                <h1>YOU ARE LOGGED IN</h1>
            </Fragment>
        );
    }
}

export default Home;
