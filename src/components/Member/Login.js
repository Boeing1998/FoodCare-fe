import React, { Component } from 'react'
import axios from 'axios'
import { USER_ROUTES } from '../../constants/routes'
import '../../css/login.css'
import { stringify } from 'uuid'
const Errorstyle = {
    color: 'red'
}
class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            emailErr: '',
            passwordErr: '',
            noti: ''
        }
        this.onInput = this.onInput.bind(this)
        this.loginUser = this.loginUser.bind(this)
    }

    onInput(e) {
        let target = e.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value
        })
    }
    loginUser(e) {
        e.preventDefault()

        let check = true
        let email = this.state.email
        let password = this.state.password

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

        if (check) {
            const data = {
                email: this.state.email,
                password: this.state.password
            }
            
            //get token
            axios.post(USER_ROUTES.LOGIN, data)
                .then((res) => {
                    localStorage.setItem('token', res.data.data.token)
                    // console.log(res.data.data.token)
                    this.props.history.push('/')

                })
                .catch((res) => {
                    console.log(res.response.data.message)
                    this.setState({
                        noti: res.response.data.message
                    })
                })


            //get profile
           

        }
    }
    render() {
        return (

            <form onSubmit={this.loginUser}>
                <h3>Login</h3>
                <p style={Errorstyle}>{this.state.noti}</p>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.onInput} />
                    <p style={Errorstyle} >{this.state.emailErr}</p>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.onInput} />
                    <p style={Errorstyle} >{this.state.passwordErr}</p>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/register">sign in?</a>
                </p>
            </form>
        )
    }
}

export default Login