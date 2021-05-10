import React, { Component } from 'react'
import '../../css/Container.css'
// import '../../css/profile.css'                                                                                  
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Login from './Login'
import Register from './Register'
import Homepage from './Homepage'
import ProfileUser from './ProfileUser'
class Container extends Component {
    constructor(props) {
        super(props)
    }

    isAuth() {
        if (localStorage.getItem('token') !== null) {
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/profile"}>My account</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={() => { localStorage.removeItem('token') }} to={"/login"}>Logout</Link>
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
            <Router>
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <Link className="navbar-brand" to={"/"}>positronX.io</Link>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                                {this.isAuth()}
                            </div>
                        </div>
                    </nav>

                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <Switch>
                                <Route exact path='/' component={Homepage} />
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={Register} />
                            </Switch>
                        </div>
                        <Route path="/profile" component={ProfileUser} />
                    </div>
                </div></Router>
        )
    }
}

export default Container