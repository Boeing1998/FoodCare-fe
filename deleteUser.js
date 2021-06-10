import axios from 'axios'
import React, { Component } from 'react'
import { USER_ROUTES } from '../../constants/routes'
import { Modal } from '@material-ui/core'
import '../../css/ManageUser.css'
import '../../css/Modal.css'
var check = []
class ManageUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            page: 1,
            hide: false,
            openModal: false
        }
        this.onSelectedDelete = this.onSelectedDelete.bind(this)
    }
    componentDidMount() {
        const confiq = {
            headers: {
                'Authorization': 'token ' + localStorage.getItem('token')
            }
        }
        let key = `?&page=0&limit=6`
        axios.get(USER_ROUTES.LISTUSER + key, confiq)
            .then(res => {
                this.setState({
                    data: res.data.data
                })
            })
    }
    onPreviousPage = () => {
        this.setState({ page: this.state.page - 1 })
        axios.get(`https://reqres.in/api/users?page=${this.state.page - 1}`)
            .then(res => {
                this.setState({
                    data: res.data.data
                })
            })
    }
    onNextPage = () => {
        this.setState({ page: this.state.page + 1 })
        axios.get(`https://reqres.in/api/users?page=${this.state.page + 1}`)
            .then(res => {
                this.setState({
                    data: res.data.data
                })
            })
    }
    onDelete = async (id) => {
        // this.setState({
        //     data: this.state.data.filter((arr) => arr.id !== id)
        // })
        // for (let i = 0; i < this.state.data.length; i++) {
        //     if (this.state.data[i].id == id) {
        //         this.state.data.splice(i, 1)
        //         this.setState({
        //             data: this.state.data
        //         })
        //     }
        // }
        this.setState({
            openModal: true
        })
    }
    onSelectedDelete = async () => {
        for (let i = 0; i < check.length; i++) {
            await this.setState({
                data: this.state.data.filter((arr) => arr.id !== check[i]),
            })
        }
    }
    onSelect = (id) => {
        let arr = this.state.data.find(arr => arr.id == id)
        if (this.onCheckExist(arr.id) == false) {
            check.push(arr.id)
        } else {
            check.map((key, index) => {
                if (key == id) {
                    check.splice(index, 1)
                }
            })
        }
    }
    onCheckExist = (id) => {
        let idUser = check.find(arr => arr == id)
        if (idUser) {
            return true
        }
        return false
    }
    onBanned = (idUser) => {
        const confiq = {
            headers: {
                'Authorization': 'token ' + localStorage.getItem('token')
            }
        }
        const data = {
            isBanned: true
        }
        let key = `/${idUser}/ban`
        axios.patch(USER_ROUTES.BANUSER + key, data, confiq)
            .then(res => {
                console.log(res.data)
            })
    }
    renderData = () => {
        let data = this.state.data
        if (data.length > 0) {
            return data.map((key, index) => {
                return (
                    <tr key={index} className={key.isBanned == true ? 'd-none' : ''}>

                        {/* <td>{key.firstName + " " + key.lastName}</td> */}
                        <td><img src={key.avatarUrl} alt="#" style={{ width: '75px' }} /></td>
                        <td>{key.email}</td>
                        <td >
                            <a href=" "
                                className="edit mr-3" data-toggle="modal" onClick={() => this.onBanned(key._id)}>
                                <i className="bi bi-x-circle-fill text-warning ml-3 " />
                            </a>

                        </td>
                        <td >
                            <a href=" "
                                className="delete" data-toggle="modal" onClick={() => this.onDelete(key.id)}>
                                <i className="bi bi-trash-fill text-danger ml-4" />
                            </a>
                            <Modal
                                open={this.state.openModal}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                                id="check"
                            >
                                <div className="modal" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Do you want delete this account</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                                    onClick={() => this.setState({
                                                        openModal: false
                                                    })}>
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <p className="d-block mx-auto" style={{ color: 'green', fontSize: '18px' }}>{this.state.noti}</p>

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                                    onClick={() => this.setState({
                                                        openModal: false
                                                    })}>Cancel</button>
                                                <button type="button" className="btn btn-danger" data-dismiss="modal"
                                                    onClick={() => {this.setState({
                                                        openModal: false
                                                    }), this.onDeleteUser(key._id)}}>Delete account</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>

                        </td>
                    </tr>
                )
            })
        }
    }
    render() {
        return (
            <div className="container-xl " style={{ marginTop: '2%', marginLeft: '13%' }}>
                <div className="table-responsive overflow-hidden">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-9">
                                    <h2>Manage <b>Employees</b></h2>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix  mt-4">
                            <nav aria-label="Page navigation example row">
                                <ul className="pagination">
                                    <li className={`page-item ${this.state.page > 1 ? '' : 'disabled'} col-1 pr-2`} >
                                        <a className="page-link" href="#" tabIndex="-1" aria-disabled="true" onClick={() => this.onPreviousPage()}>Previous</a>
                                    </li>
                                    <li className="page-item ml-auto col-1 pr-2 text-center">
                                        <a className="page-link" href="#" onClick={() => this.onNextPage()}>Next</a>
                                    </li>
                                </ul>
                                <ul className="pagination  ">

                                </ul>
                            </nav>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Email</th>
                                    <th>Ban user</th>
                                    <th>Delete user</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderData()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default ManageUser

    // componentDidMount = async () => {
    //     const confiq = await {
    //         headers: {
    //             Authorization: 'token ' + localStorage.getItem('token'),
    //         }
    //     }
    //     let key = 'show?limit=100'
    //     await axios.get(USER_ROUTES.FOODS + key, confiq)
    //         .then(res => {
    //             const orderBy = _.orderBy(res.data.data, ['created_at'], ['desc'])
    //             this.setState({
    //                 data: orderBy,
    //             })
    //         })
    // }