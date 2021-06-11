import axios from 'axios'
import React, { Component } from 'react'
import { USER_ROUTES } from '../../constants/routes'
import { Modal } from '@material-ui/core'
import '../../css/ManageUser.css'
import '../../css/Modal.css'
import { Link, withRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProcessingNotify = () => {
    toast.error('🦄 Processing...', { position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
}
class ManageUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            page: 1,
            hide: false,
            openModal: false,
            idUser: ''
        }
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
    onDeleteUser = async () => {

        const confiq = {
            headers: {
                'Authorization': 'token ' + localStorage.getItem('token')
            }
        }
        let key = await `/${this.state.idUser}/delete`
        await axios.delete(USER_ROUTES.BANUSER + key, confiq)
            .then(res => {
                console.log(res.data)
            })
        let key1 = await `?&page=0&limit=6`
        await axios.get(USER_ROUTES.LISTUSER + key1, confiq)
            .then(res => {
                this.setState({
                    data: res.data.data
                })
            })

    }
    openModal = () => {
        return <Modal
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
                                    openModal: false,

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
                                onClick={() => {
                                    this.setState({
                                        openModal: false,
                                    }); this.onDeleteUser()
                                }}>Delete account</button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>

    }
    onBanned = async (idUser) => {
        const confiq = {
            headers: {
                'Authorization': 'token ' + localStorage.getItem('token')
            }
        }
        let key = await `/${idUser}/ban`
        await axios.patch(USER_ROUTES.BANUSER + key, {}, confiq)
            .then(res => {
                console.log(res.data)
            })

        let key1 = await `?&page=0&limit=6`
        await axios.get(USER_ROUTES.LISTUSER + key1, confiq)
                .then(res => {
                    this.setState({
                        data: res.data.data
                    })
                })
    }
    renderData = () => {
        let data = this.state.data
        if (data.length > 0) {
            return data.map((key, index) => {
                return (
                        <tr key={index} >
                            <td><img src={key.avatarUrl} alt="#" style={{ width: '75px' }} /></td>
                            <td>{key.email} {key.isBanned == true ? <b className='text-danger'>(is Banned)</b> : null}</td>
                            <td >
                                <a href=" "
                                    className="edit mr-3" data-toggle="modal" onClick={() => this.onBanned(key._id)}>
                                    <i className="bi bi-x-circle-fill text-warning ml-3 " onClick={ProcessingNotify} />
                                </a>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                />
                            </td>
                            <td >
                                <a href=" "
                                    className="delete" data-toggle="modal"
                                    onClick={() => this.setState({
                                        openModal: true, idUser: key._id
                                    })}>
                                    <i className="bi bi-trash-fill text-danger ml-4" />
                                </a>
                                {this.openModal()}
                            </td>
                        </tr>
                )
            })
        } else {
            return <div className="col-12"
                style={{ left: '140%', top: '15px' }}>
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
                    Loading...
                </button></div>
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
                                    <h2>Manage Users</h2>
                                </div>
                            </div>
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
                <div className="row">
                        <ul className="pagination justify-content-start col-6">
                            <li className={this.state.page > 1 ? 'page-item col-2 ml-4 text-center' : 'page-item col-2 disabled ml-4 text-center'}>
                                <Link
                                    to={`/admin/user/page${this.state.page - 1}`}
                                    className="page-link"
                                    onClick={() => this.onPreviousPage()}>Previous</Link>
                            </li>
                        </ul>
                        <ul className="pagination justify-content-end col-6">
                            <li className="page-item col-2 text-center">
                                <Link
                                    to={`/admin/user/page${this.state.page + 1}`}
                                    className="page-link text-center"  onClick={() => this.onNextPage()} >Next
                                
                                </Link>
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }
}
export default ManageUser