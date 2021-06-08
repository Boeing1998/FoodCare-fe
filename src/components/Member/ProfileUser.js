
import React, { Component } from 'react'
import axios from 'axios'
import { USER_ROUTES } from '../../constants/routes'

import MenuLeft from '../Layout/MenuLeft'
import { Link } from 'react-router-dom'

const errorStyle = {
  color: 'red'
}
class ProfileUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      dob: '',
      targetU: '',
      gender: true,
      message: '',
      formErrs: {},
      password: 'Test@12344',
      newPassword: 'Test@12344'
    }
    this.onInput = this.onInput.bind(this)
    this.onUpload = this.onUpload.bind(this)
  }
  componentDidMount = async () => {
    const confiq = await {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    }
    await axios.get(USER_ROUTES.PROFILE, confiq)
      .then(res => {
        this.setState({
          ...res.data.data
        })
      })
  }
  onInput(e) {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }
  onUpload = async (e) => {
    e.preventDefault()
    let check = true
    let firstName = this.state.firstName
    let lastName = this.state.lastName
    let targetU = this.state.targetU
    let errorSubmit = this.state.formErrs
    errorSubmit.firstName = errorSubmit.lastName = errorSubmit.targetU = ''
    if (firstName == '') {
      check = false
      errorSubmit.firstName = 'Firstname must be enter'
    }
    if (lastName == '') {
      check = false
      errorSubmit.lastName = 'lastName must be enter'
    }
    if (targetU == '') {
      check = false
      errorSubmit.targetU = 'targetU must be enter'
    }
    if (!check) {
      this.setState({
        formErrs: errorSubmit
      })
    } else {
      const data = {
        ...this.state
      }
      const confiq = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        }
      }
      await axios.put(USER_ROUTES.EDIT, data, confiq)
        .then(res => {
          this.setState({
            message: res.data.message
          })
        })

      await axios.put(USER_ROUTES.CHANGEPASSWORD, data, confiq)
        .then(res => {
          console.log(res.data)
        })
        .catch(error => {
          console.log(error.response.data.message)
        })

      await this.setState({
        ...this.state,
      })
    }

  }
  isAuth() {
    if (localStorage.getItem('token') !== null ) {
      return (
        <div className="container-fluit h-100">
          <div className="row h-100">
            <MenuLeft />
            <div className='col-10'>
              <div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
                <h3 className="mb-4 mt-5">Your profile
                <Link to="/edit-profile"> Edit your profile info</Link>
                </h3>
                <p style={{ color: 'green', fontSize: 20 }}>{this.state.message}</p>

                <img className="row ml-5 mb-1" style={{ width: '150px',height: '150px' }}
                  src="https://scontent-xsp1-1.xx.fbcdn.net/v/t31.18172-8/24273726_924974504316283_7555624572989699321_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_ohc=tGMBXb0iQVMAX8gqhQy&_nc_ht=scontent-xsp1-1.xx&oh=c77620bd7abbc7c76fa772369bd8756b&oe=60C69212"
                  alt="" />

                <div className="custom-file col-2 ml-3">

                  <input type="file" className="custom-file-input" id="validatedCustomFile" required />

                  <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                  <div className="invalid-feedback">Example invalid custom file feedback</div>
                </div>

              </div>

              <form className="col-12" onSubmit={this.onUpload}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" name='firstName' className="form-control" value={this.state.firstName} onChange={this.onInput} />

                      <p style={errorStyle}>{this.state.formErrs.firstName}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" name='lastName' className="form-control" value={this.state.lastName} onChange={this.onInput} />
                      <p style={errorStyle}>{this.state.formErrs.lastName}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="text" className="form-control" defaultValue={this.state.email} readOnly />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Date of birth</label>
                      <input type="Date" name='dob' className="form-control" value={this.state.dob} onChange={this.onInput} />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Sex</label>
                      <select name='gender' value={this.state.gender} onChange={this.onInput} className="form-control">
                        <option value={true}>Male</option>
                        <option value={false}>Female</option>
                      </select>
                      {/* <input type="text" name='dob' className="form-control" value={this.state.dob} placeholder={this.state.profile.dob} onChange={this.onInput} /> */}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>TargetU</label>
                      <input type="text" name='targetU' className="form-control" value={this.state.targetU} onChange={this.onInput} />
                      <p style={errorStyle}>{this.state.formErrs.targetU}</p>
                    </div>
                  </div>

                  <div className="col-md-6">

                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Bio</label>
                      <textarea className="form-control" rows={4} defaultValue={"Hello world"} readOnly />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                </div>
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

export default ProfileUser;