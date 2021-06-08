import React, { Component } from 'react'
import axios from 'axios'
import { USER_ROUTES } from '../../constants/routes'
import '../../css/login.css'
import { Link, withRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = () => {
    toast.success('🦄 Login loading...', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
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
                    if (res.data.data.role == 'admin') {
                        localStorage.setItem('token', res.data.data.token)
                        localStorage.setItem('admin', res.data.data.role)
                        this.props.history.push('/admin')
                    }
                    else{
                        localStorage.setItem('token', res.data.data.token)
                        this.props.history.push('/')
                    }

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
                <button type="submit" className="btn btn-primary btn-block" onClick={notify}>Login</button>
                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <p className="forgot-password text-right">
                    Already registered <Link to="/register">sign in?</Link>
                </p>
            </form>
        )
    }
}

export default withRouter(Login)