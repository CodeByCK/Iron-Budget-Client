import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Landing-style.scss'

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
                {/* <div className="text-center">
                    <h1>LANDING PAGE</h1>
                    <Link to='/signup'><h1>SIGN UP</h1></Link>
                    <Link to='/login'><h1>LOG IN</h1></Link>
                </div> */}

                <div id="body">
                    <nav className="navbar navbar-dark bg-transparent">
                        <div className="navbar-brand">
                            <img className="logo" src="/images/logo_landing.png" alt="logo" />
                        </div>
                        <Link to='/login'><button className="login">LOG IN</button></Link>
                        {/* <span className="login">SIGN UP</span> */}
                    </nav>

                    <header className="masthead">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-3">
                                            Join the millions of people who are saving money
                                            with Iron Budget!
                                            </h1>
                                        {/* <button className="StartButton"> Start Now!</button> */}
                                        <Link to='/signup'><button type="button" class="btn btn-warning text-white">Start Now!</button></Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 my-auto">
                                    <div className="device-container">
                                        <div className="device-mockup iphone6_plus portrait white">
                                            <div className="device">
                                                <div className="screen">
                                                    {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                                                    <img src="/images/iphone.png" className="img-fluid" alt />
                                                </div>
                                                <div className="button">
                                                    {/* You can hook the "home button" to some JavaScript events or just remove it */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                </div>







            </Fragment >
        );
    }
}

export default LandingPage;