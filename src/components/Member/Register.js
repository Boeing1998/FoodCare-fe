
import React, { Component } from 'react'
import { USER_ROUTES } from '../../constants/routes'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Errorstyle = {
    color : 'red'
}
class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            username: '',
            emailErr: '',
            passwordErr: '',
            usernameErr: '',
            noti: ''
        }
        this.onInput = this.onInput.bind(this)
        this.registerUser = this.registerUser.bind(this)
    }

    onInput(e) {
        let target = e.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value
        })
    }
    registerUser(e) {
        e.preventDefault()
        let check = true
        let username = this.state.username
        let email = this.state.email
        let password = this.state.password
        // Validate username
        if (username == '') {
            check = false
            this.setState({
                usernameErr: 'Enter Username'
            })

        } else {
            this.setState({
                usernameErr: ''
            })
        }
        if (email == '') {
            check = false
            this.setState({
                emailErr: 'Enter Email '
            })
        } else {
            this.setState({
                emailErr: ''
            })
        }
        if (password == '') {
            check = false
            this.setState({
                passwordErr: 'Enter Password'
            })
        } else if (password.length < 8) {
            check = false
            this.setState({
                passwordErr: 'Use 8 characters or more for your password'
            })
        } else {
            this.setState({
                passwordErr: ''
            })
        }

        //API
        if(check){
            const data = {
                email : this.state.email,
                password : this.state.password,
                usernamme : this.state.usernamme
            }
            axios.post(USER_ROUTES.SIGNUP,data)
                .then((res) => {
                    if(res.data.status = 201){
                        this.setState({
                            noti : res.data.message
                        })
                    }
                })
                .catch((res) => {
                    this.setState({
                        noti : '',
                        emailErr : res.response.data.message
                    })
                })
        }
    }
    render() {
        return (
            <form onSubmit={this.registerUser}>
                <h3>Register</h3>
                <p style={{color:'green'}}>{this.state.noti}</p>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="User name" name="username" onChange={this.onInput} />
                    <p style={Errorstyle} >{this.state.usernameErr}</p>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.onInput} />
                    <p style={Errorstyle} >{this.state.emailErr}</p>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.onInput} />
                    <p style={Errorstyle}>{this.state.passwordErr}</p>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Register</button>

                <p className="forgot-password text-right">
                    Already registered <Link to="/login">sign in?</Link>
                </p>
            </form>
        )
    }
}

export default Register