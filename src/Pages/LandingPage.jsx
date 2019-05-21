import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


class LandingPage extends Component {


    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BASE_URL}`)
            .then((u) => {
                console.log(u.data)
            })
    }


    render() {
        return (
            <Fragment>
                <div className="text-center">
                    <h1>LANDING PAGE</h1>
                    <Link to='/signup'><h1>SIGN UP</h1></Link>
                    <Link to='/login'><h1>LOG IN</h1></Link>
                </div>
            </Fragment>
        );
    }
}

export default LandingPage;
