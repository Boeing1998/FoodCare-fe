import React, { Component } from 'react'
import axios from 'axios'
import { USER_ROUTES } from '../../constants/routes'
import '../../css/login.css'
import MenuLeft from '../Layout/MenuLeft'
const Errorstyle = {
    color: 'red'
}
class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: localStorage.getItem('token'),
            formErrs: {},
            password: '',
            newPassword: '',
            noti: ''
        }
        this.onInput = this.onInput.bind(this)
        this.onUpload = this.onUpload.bind(this)
    }

    onInput(e) {
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
        console.log(value)
    }
    onUpload = async (e) => {
        e.preventDefault()
        let check = true
        let password = this.state.password
        let newPassword = this.state.newPassword
        let errorSubmit = this.state.formErrs
        errorSubmit.password = errorSubmit.newPassword = ''
        if (password == '') {
            check = false
            errorSubmit.password = 'Old password must be enter'
        }
        if (newPassword == '') {
            check = false
            errorSubmit.newPassword = 'New password must be enter'
        }

        if (!check) {
            this.setState({
                formErrs: errorSubmit
            })
        } else {
            const data = {
                // ...this.state
                password: this.state.password,
                newPassword: this.state.newPassword
            }
            const confiq = {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            }
            await axios.put(USER_ROUTES.CHANGEPASSWORD, data, confiq)
                .then(res => {
                    console.log(res.data)
                    this.props.history.push('/login')
                    localStorage.removeItem('token')
                })
                .catch(error => {
                    console.log(error.response)
                    this.setState({
                        noti: error.response.data.message
                    })
                })

        }

    }
    isAuth() {
        if (this.state.token !== null) {
            return (
                <div className="container-fluit h-100" >
                    <div className="row h-100">
                        <MenuLeft />
                        <div className='col-10 mt-5 pt-5'>
                            <form className="mt-5" onSubmit={this.onUpload} >
                                <h3 className="">Change password</h3>
                                <p style={Errorstyle}>{this.state.noti}</p>

                                <div className="form-group">
                                    <label>Your password</label>
                                    <input type="password" name='password' className="form-control" value={this.state.password} onChange={this.onInput} />
                                    <p style={Errorstyle} >{this.state.formErrs.password}</p>
                                </div>

                                <div className="form-group">
                                    <label>New password</label>
                                    <input type="password" name='newPassword' className="form-control" value={this.state.newPassword} onChange={this.onInput} />
                                    <p style={Errorstyle} >{this.state.formErrs.newPassword}</p>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">Change</button>

                            </form>

                        </div>
                    </div>
                </div>

            )
        } else {
            this.props.history.push('/login')
        }
    }
    render() {
        return (
            <>
                {this.isAuth()}
            </>
        )
    }
}

export default ChangePassword