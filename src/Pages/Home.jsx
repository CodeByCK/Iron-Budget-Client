import React, { Component, Fragment } from 'react';
import SideNav from './SideNav/SideNav'
import Income from './Income/Income'
import TopNav from './TopNav/TopNav'
import Groups from './Groups/Groups'
import fire from 'firebase'
import axios from 'axios'
import Chart from './Chart/Chart'
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


    //? ==================================================================================================
    //! =====----=-=-=-=-=-=-=-----===== ONLY WORKS WHEN PAGE REFRESHES. =====----=-=-=-=-=-=-=-----=====
    //? ==================================================================================================

    // calculateTotal = () => {
    //     let total = 0
    //     console.log('calulateTotal')
    //     this.state.groups.map((groups, i) => {
    //         groups.items.map((item, i) => {
    //             total += Number(item.planned)
    //         })
    //     })

    //     this.setState({
    //         groupAmount: total
    //     }, () => this.setState({
    //         budget: this.state.amount - this.state.groupAmount
    //         // budget: Date.now() this works so my job is done here... but u
    //     }))
    //     //do your calc up there and then 
    //     //setState down here after the loops 
    // }

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
        //do your calc up there and then 
        //setState down here after the loops 
    }
    //? ==================================================================================================
    //! =====----=-=-=-=-=-=-=-----==========----=-=-=-=-=-=-=-----==========----=-=-=-=-=-=-=-----=======
    //? ==================================================================================================



    getGroup = () => {
        let userId = this.props.user

        axios.get(`${process.env.REACT_APP_BASE_URL}/api/Group/${userId}`)
            .then(groups => {
                // console.log(groups, "dsadasdasdasdsa-das=d-asd=-asd=-asd=as-das=d-asd=-asdas=-dasd=-asd=as-dasd=-")
                // this.setState({
                //     groups: groups.data.response
                // })
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

        // console.log("FROM HOME============", this.state.user)
        return (

            <Fragment>

                <SideNav logout={this.logout} />

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-7">
                            <TopNav groupAmount={this.state.groupAmount} user={this.props.user} amount={this.state.amount} reload={this.getGroup} groups={this.state.groups} />
                            <Chart groups={this.state.groups} items={this.state.groups.items} />
                            <Income user={this.props.user} onClick={this.retrieveAmount} />
                            {/* <div className="card mb-3 p-3">                            <Chart groups={this.state.groups} items={this.state.groups.items} />
                            </div> */}

                            {this.state.groups.map((group, i) => {

                                // console.log('froup', group)
                                return (<Groups calculateTotal={this.calculateTotal} groupAmount={this.retrieveGroupAmount}
                                    deleteGroup={this.deleteGroup}
                                    reload={this.getGroup}
                                    group={group}
                                    i={i}
                                    user={this.props.user} />)
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
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>
                {/* <div className="text-center"><h1>{this.state.budget} left to budget</h1></div> */}
            </Fragment>
        );
    }
}

export default Home;
