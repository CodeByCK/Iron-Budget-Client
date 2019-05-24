import React, { Component, Fragment } from 'react';
import SideNav from './SideNav/SideNav'
import Income from './Income/Income'
import TopNav from './TopNav/TopNav'
import Groups from './Groups/Groups'
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
                            {/* <h1>{this.state.amount}</h1> <h3>left to budget</h3> */}
                        </div>
                        <div className="col-md-7">
                            <TopNav amount={this.state.amount} />
                            {/* <h1 className="text-center">INCOME FORM</h1> */}
                            <Income user={this.props.user} onClick={this.retrieveAmount} />
                            <Groups user={this.props.user} />
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
