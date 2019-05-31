import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Landing-style.scss'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Fade';
class LandingPage extends Component {


    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BASE_URL}`)
            .then((u) => {
                console.log(u.data)
            })
    }


    render() {
        return (
            <Fragment >
                <div id="body">
                    <nav className="navbar navbar-dark bg-transparent">
                        <div className="navbar-brand">
                            <img className="logo" src="/images/logo_landing.png" alt="logo" />
                        </div>
                        <Link to='/login'><button className="login">LOG IN</button></Link>
                    </nav>
                    <Fade>
                        <header className="masthead">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 my-auto">
                                        <div className="header-content mx-auto">
                                            <Slide left>
                                                <h1 className="mb-3">
                                                    Join the millions of people who are saving money
                                                    with Iron Budget!
                                                </h1>
                                            </Slide>
                                            <Link to='/signup'><button type="button" class="btn btn-warning text-white">Start Now!</button></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 my-auto">
                                        <div className="device-container">
                                            <div className="device-mockup iphone6_plus portrait white">
                                                <div className="device">
                                                    <div className="screen">
                                                        <Slide right>
                                                            <img src="/images/iphone.png" className="img-fluid" alt />
                                                        </Slide>
                                                    </div>
                                                    <div className="button">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </Fade>
                </div>
            </Fragment >
        );
    }
}

export default LandingPage;