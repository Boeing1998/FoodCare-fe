import React, { Component } from 'react'
import '../../css/Container.css'
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom"
import Login from './Login'
import Register from './Register'
import Homepage from './Homepage'
import ProfileUser from './ProfileUser'
import ChangePassword from './ChangePassword'
import Diet from '../Preferences/Diet'
import Meals from '../Preferences/Meals'
import SavedPlans from '../Preferences/SavedPlans'
import ProfileInfo from './ProfileInfo'
import Index from '../Admin/Index'
class Container extends Component {
    constructor(props) {
        super(props)
    }

    isAuth() {
        if (localStorage.getItem('token') !== null) {
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/account">My account</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={() => { localStorage.clear() }} to={"/login"}>Logout</Link>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/login"}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/register"}>Register</Link>
                    </li>
                </ul>
            )
        }
    }
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light row m-0">
                    <div className="row">
                        <Link className="navbar-brand col-2" to={"/"}>
                            <i className="fas fa-cheese text-warning"></i>
                            FoodCare
                        </Link>
                        <div className="collapse navbar-collapse col-9" id="navbarTogglerDemo02">
                            {this.isAuth()}
                        </div>
                    </div>
                </nav>

                <Route path="/admin" component={Index} />
                <div className="auth-wrapper" >
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/changepw" component={ChangePassword} />
                        <Route exact path='/preferences/diet' component={Diet} />
                        <Route path="/preferences/meals" component={Meals} />
                        <Route path="/preferences/savedplans" component={SavedPlans} />
                        <Route path="/account" component={ProfileUser} />
                        <Route path="/edit-profile" component={ProfileInfo} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(Container)