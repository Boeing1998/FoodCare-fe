import React, { Component } from 'react'
import AdminHeader from '../Layout/AdminHeader'
import AdminMenuleft from '../Layout/AdminMenuleft'
import ManageUser from './ManageUser'
import ManageFood from './ManageFood'
import Login from '../Member/Login'
import DashBoard from './DashBoard'
import TaskManager from './TaskManager'
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom"

class Index extends Component {
    render() {
        
        if (localStorage.getItem('token') !== null && localStorage.getItem('admin') == 'admin') {
            return (
                <div>
                    <AdminHeader />
                    <AdminMenuleft />
                    <div>
                        <Switch>
                            <Route exact path='/admin' component={DashBoard} />
                            <Route path='/admin/user' component={ManageUser} />
                            <Route path="/admin/food" component={ManageFood} />
                            <Route path="/admin/task" component={TaskManager} />
                        </Switch>
                    </div>

                </div>
            )
        } else {
            return <div className="auth-wrapper">
                <Route path="/admin" component={Login} />
            </div>



        }
    }
}
export default Index