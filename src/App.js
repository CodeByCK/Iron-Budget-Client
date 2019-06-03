import React, { Component, Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import ReactLoading from "react-loading";
//Pages
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'
import Home from './Pages/Home'
import LandingPage from './Pages/LandingPage'

//Firebase Settings
import firebase from './config/Fire';
import axios from 'axios';

class App extends Component {
    state = {
        user: null
    }


    componentDidMount() {
        this.authListener();
    }

    //Checking if user is logged in
    authListener() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user }, () => {
                    axios.post(`${process.env.REACT_APP_BASE_URL}/api/newUser`, {
                        email: this.state.user.email,
                        uid: this.state.user.uid
                    }).then((res) => {
                        console.log(res)
                    }).catch((err) => {
                        console.log(err)
                    })
                })
            } else {
                this.setState({ user: false })
            }
        });
    }



    render() {
        console.log("THIS IS FROM APP.JS=============", this.state.user)
        return (
            <Fragment>

                {this.state.user === null ? (
                    <ReactLoading className="PageLoader" type="spinningBubbles" color="#36A2EB" height={'64px'} width={'64px'} />
                ) : this.state.user === false ? (
                    <Fragment>
                        <Switch>
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/" component={LandingPage} />
                        </Switch>
                    </Fragment>
                ) : (
                            <Fragment>
                                <Switch>
                                    <Route exact path="/" user={this.state.user} component={(props) => { return <Home {...props} user={this.state.user.uid} /> }} />
                                </Switch>
                            </Fragment>
                        )}
            </Fragment>
        );
    }
}


export default App;