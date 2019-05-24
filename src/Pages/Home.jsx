import React, { Component, Fragment } from 'react';
import SideNav from './SideNav/SideNav'
import Income from './Income/Income'
import TopNav from './TopNav/TopNav'
import Groups from './Groups/Groups'
import fire from 'firebase'
import axios from 'axios'
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
    componentDidMount() {

        this.getGroup()
        // this.totalItemAmount()
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
