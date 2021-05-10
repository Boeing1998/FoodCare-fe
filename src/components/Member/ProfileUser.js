
import React, { Component } from 'react'
import axios from 'axios'
import { USER_ROUTES } from '../../constants/routes'
const errorStyle = {
  color: 'red'
}
class ProfileUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: localStorage.getItem('token'),
      firstName: '',
      lastName: '',
      dob: '',
      targetU: '',
      gender: true,
      message: '',
      formErrs: {}
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
    console.log(value)

  }
  onUpload = async (e) => {
    e.preventDefault()
    let check = true
    let firstName = this.state.firstName
    let lastName = this.state.lastName
    let dob = this.state.dob
    let targetU = this.state.targetU
    let errorSubmit = this.state.formErrs
    console.log(dob)

    if (firstName == '') {
      check = false
      errorSubmit.firstName = 'Firstname must be enter'
    } else {
      errorSubmit.firstName = ''
      this.setState({
        formErrs: errorSubmit
      })
    }
    if (lastName == '') {
      check = false
      errorSubmit.lastName = 'lastName must be enter'
    }
    else {
      errorSubmit.lastName = ''
      this.setState({
        formErrs: errorSubmit
      })
    }
    if (targetU == '') {
      check = false
      errorSubmit.targetU = 'targetU must be enter'
    }
    else {
      errorSubmit.targetU = ''
      this.setState({
        formErrs: errorSubmit
      })
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

      await this.setState({
        ...this.state
      })
    }

  }
  isAuth() {
    if (this.state.token !== null) {
      return (
        <section className="py-5 my-5">
          <div className="container">
            <h1 className="mb-5">Account Settings</h1>

            <div className="bg-white shadow rounded-lg d-block d-sm-flex">
              <div className="profile-tab-nav border-right">
                <div className="p-4">
                  <div className="img-circle text-center mb-3">
                    <img src="img/user2.jpg" alt="Image" className="shadow" />
                  </div>
                  <h4 className="text-center">Kiran Acharya</h4>
                </div>
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a className="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
                    <i className="fa fa-home text-center mr-1" />
                  Account
                </a>

                </div>
              </div>
              <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
                  <h3 className="mb-4">Account Settings</h3>
                  <p style={{ color: 'green', fontSize: 20 }}>{this.state.message}</p>
                  <form onSubmit={this.onUpload}>
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
                      <button className="btn btn-light">Cancel</button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </section>
      )
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