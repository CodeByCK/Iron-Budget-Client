import React, { Component, Fragment } from 'react';
import SideNav from './SideNav/SideNav'
import Income from './Income/Income'
import TopNav from './TopNav/TopNav'
import Groups from './Groups/Groups'
import fire from 'firebase'
import axios from 'axios'
import Chart from './Chart/Chart'
import Fade from 'react-reveal/Fade';



class Home extends Component {


    state = {
        amount: null,
        budget: null,
        groups: [],
        itemRefresh: false,
        groupAmount: null

    }


    componentDidMount() {
        this.getGroup()

    }


    retrieveAmount = (amount) => {
        console.log('retrieved', amount)
        this.setState({ amount })
    }





    // Calculate total of items
    calculateTotal = () => {
        let total = 0
        console.log('calulateTotal')
        this.state.groups.map((groups, i) => {
            groups.items.map((item, i) => {
                total += Number(item.planned)
            })
        })

        this.setState({
            groupAmount: total
        })
    }



    getGroup = () => {
        let userId = this.props.user
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/Group/${userId}`)
            .then(groups => {
                this.setState({
                    groups: groups.data.response
                }, () => this.calculateTotal())
                this.calculateTotal()
            }).catch(err => {
                console.log(err)
            })
    }


    createGroup = () => {
        let user = this.props.user
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/createGroup`, {
            user
        }).then(response => {
            this.setState({
                groups: [...this.state.groups, response.data]
            }, () => this.calculateTotal())
        }).catch(err => {
            console.log(err)
        })
    }



    deleteGroup = (e) => {
        e.preventDefault()
        console.log("clicked")
        let id = e.target.getAttribute("id")

        axios.post(`${process.env.REACT_APP_BASE_URL}/api/deleteGroup/${id}`)
            .then(() => {
                this.getGroup()
                console.log("deleted")

            }).catch(err => {
                console.log(err)
            })
    }





    //Logout 
    logout = () => {
        fire.auth().signOut()
    }


    render() {
        return (

            <Fragment>

                <SideNav logout={this.logout} />
                <Fade>

                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-md-2">
                            </div>
                            <div className="col-md-8">
                                <TopNav
                                    groupAmount={this.state.groupAmount}
                                    user={this.props.user}
                                    amount={this.state.amount}
                                    reload={this.getGroup}
                                    groups={this.state.groups}
                                />

                                <div className="chartJs">
                                    <Chart
                                        groups={this.state.groups}
                                        items={this.state.groups.items}
                                    />
                                </div>

                                <Income
                                    user={this.props.user}
                                    onClick={this.retrieveAmount}
                                />

                                {this.state.groups.map((group, i) => {
                                    return (
                                        <Groups
                                            calculateTotal={this.calculateTotal}
                                            groupAmount={this.retrieveGroupAmount}
                                            deleteGroup={this.deleteGroup}
                                            reload={this.getGroup}
                                            group={group}
                                            i={i}
                                            user={this.props.user} />
                                    )
                                })}

                                <div className="card addGroup mb-3">
                                    <div className="card-body">
                                        <span style={{ cursor: "pointer" }}
                                            onClick={this.createGroup}>
                                            <i className="fas fa-plus text"></i>
                                            <strong>Add Group</strong>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                            </div>
                        </div>
                    </div>
                </Fade>
            </Fragment>
        );
    }
}

export default Home;
