import React, { Component } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { USER_ROUTES } from '../../constants/routes'
import { Link, withRouter } from 'react-router-dom'
import { Modal } from '@material-ui/core'
import '../../css/Modal.css'
class TaskManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [], data1: {}, request: '', custom: '', message: '', page: 0, isLoading: false
        }
    }
    // componentDidMount = async () => {
    //     const confiq = await {
    //         headers: {
    //             Authorization: 'Bearer ' + localStorage.getItem('token'),
    //         }
    //     }
    //     // let key = await `?&page=${this.state.page}&type=all&limit=6`
    //     let key = await `?page=${this.state.page}&type=all&limit=6`
    //     await axios.get(USER_ROUTES.FOODSFORADMIN + key, confiq)
    //         .then(res => {
    //             const randomData = _.shuffle(res.data.data)
    //             this.setState({
    //                 data: randomData,
    //                 dataFilter: randomData
    //             })
    //         })
    // }
    componentDidMount = async () => {
        const confiq = await {
            headers: {
                Authorization: 'token ' + localStorage.getItem('token'),
            }
        }
        let key = `/show?&page=${this.state.page}&type=all&limit=6`
        await axios.get(USER_ROUTES.FOODS + key, confiq)
            .then(res => {
                console.log(res.data)
                const orderBy = _.orderBy(res.data.data, ['created_at'], ['desc'])
                this.setState({
                    data: orderBy,
                    isLoading: true
                })
            })
    }
    onInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    onNextPage = async () => {
        await this.setState({
            page: this.state.page + 1
        })
        const confiq = await {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        }
        let key = await `/show/?&page=${this.state.page}&type=all&limit=6`
        await axios.get(USER_ROUTES.FOODS + key, confiq)
            .then(res => {
                console.log(res.data)
                const randomData = _.shuffle(res.data.data)
                this.setState({
                    data: randomData
                })
            })
    }
    onPreviousPage = async () => {
        await this.setState({
            page: this.state.page - 1
        })
        const confiq = await {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        }
        let key = await `/show/?&page=${this.state.page}&type=all&limit=6`
        await axios.get(USER_ROUTES.FOODS + key, confiq)
            .then(res => {
                console.log(res.data)
                const randomData = _.shuffle(res.data.data)
                this.setState({
                    data: randomData
                })
            })
    }
    onSetRequest = async (foodItem) => {
        const confiq = {
            headers: {
                'Authorization': 'token ' + localStorage.getItem('token')
            }
        }
        const data = {
            foodId: foodItem._id,
            custom: false,
            request: false
        }
        await axios.patch(USER_ROUTES.EDITFOOD, data, confiq)
        this.setState({
            data: this.state.data.map((key) => key._id === foodItem._id ? foodItem : key)
        })
        let key = '/show?limit=6'
        axios.get(USER_ROUTES.FOODS + key, confiq)
            .then(res => {
                const orderBy = _.orderBy(res.data.data, ['created_at'], ['desc'])
                this.setState({
                    data: orderBy,
                })
            })

    }

    onDetail = (idFood) => {
        axios.get(USER_ROUTES.FOODS + idFood)
            .then(res => {
                this.setState({
                    data1: res.data.data
                })
            })

    }
    onModal = () => {
        let data = this.state.data1
        if (this.state.data1) {
            return (
                <Modal open={this.state.open}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    id="check"
                >
                    <form onSubmit={(e) => this.onSubmitMess(e, {
                        ...data,
                        custom: data.custom == false ? true : false,
                        request: data.request == false ? true : false
                    })}>
                        <div className="modal" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Create food</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                            onClick={() => this.setState({
                                                open: false
                                            })}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Message : </p>
                                        <div>
                                            <input className="d-inline " name="message" type="text"
                                                onChange={(e) => this.onInput(e)} />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-secondary" data-dismiss="modal" >Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal>
            )
        }
    }
    onSubmitMess = async (e, foodItem) => {
        e.preventDefault()
        const confiq = {
            headers: {
                'Authorization': 'token ' + localStorage.getItem('token')
            }
        }
        const data = {
            foodId: foodItem._id,
            custom: foodItem.custom,
            request: foodItem.request,
            message: this.state.message
        }
        await axios.patch(USER_ROUTES.EDITFOOD, data, confiq)
        this.setState({
            data: this.state.data.map((key) => key._id === foodItem._id ? foodItem : key),
            open: false
        })

        let key = '/show?limit=6'
        axios.get(USER_ROUTES.FOODS + key, confiq)
            .then(res => {
                const orderBy = _.orderBy(res.data.data, ['created_at'], ['desc'])
                this.setState({
                    data: orderBy,
                })
            })
    }
    renderFood() {
        let data = this.state.data
        if (data) {
            if (this.state.isLoading == true) {
                if (data.length > 0) {
                    return data.map((key, index) => {
                        return (
                            <tr key={index} >
                            <td className="text-left" ><img src={key.image} style={{ width: '80px', height: '80px' }} /></td>
                            <td className="text-left" >{key.food_name}</td>
                            <td className="text-left">{key.nutrions.calories}</td>
                            <td className="text-left">{key.nutrions.carbs}</td>
                            <td className="text-left">{key.nutrions.fats}</td>
                            <td className="text-left">{key.nutrions.proteins}</td>
                            <td><button className="btn btn-primary " type="click"
                                onClick={() => this.onSetRequest({
                                    ...key,
                                    custom: key.custom == true ? false : true,
                                    request: key.request == true ? false : true
                                })}>Approve</button></td>
                            <td><button className="btn btn-danger " type="click"
                                onClick={() => {
                                    this.onDetail(key._id);
                                    this.setState({
                                        open: true
                                    })
                                }}>Decline</button>
                                {this.onModal()}

                            </td>
                        </tr>
                        )

                    })

                } else {
                    return (
                        <tr>
                        <div className="col-12" style={{ left: '140%', top: '1px', fontSize: "20px" }}>
                            <p className="text-danger">Food is empty</p>
                        </div>
                    </tr>
                    )
                }

            } else {
                return (
                    <tr>
                    <div className="col-12" style={{ left: '160%', top: '1px' }}>
                        <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
            Loading...
        </button>
                    </div>
                </tr>
                )
            }
        }
    }
    render() {
        return (
            <section id="shopping-cart " style={{ marginLeft: '230px'}}>
                <div className="row g-0" >
                    {/* g-0 == gutter = scrollX = 0  */}
                    <div className="col-12 ">
                        <div className="row border-0 bg-white">
                            <div className="card-content col-2 pt-5 pl-4">
                                <h4 className="card-title">Task Manager</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card border-0">
                            <div className="card-content p-0">
                                <div className="card-body table-responsive p-0">
                                    <table className="table text-center m-0">
                                        <thead className="border-0">
                                            <tr className="border-top-0">
                                                <th className="border-top-0 text-left">Image</th>
                                                <th className="border-top-0 text-left">Dish</th>
                                                <th className="border-top-0 text-left">Calories</th>
                                                <th className="border-top-0 text-left">Carbs</th>
                                                <th className="border-top-0 text-left">Fats</th>
                                                <th className="border-top-0 text-left">Proteins</th>
                                                <th className="border-top-0 text-left"></th>
                                                <th className="border-top-0 text-left"></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {this.renderFood()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <ul className="pagination justify-content-start col-6">
                            <li className={this.state.page >= 1 ? 'page-item col-2 ml-4 text-center' : 'page-item col-2 disabled ml-4 text-center'}>
                                <Link to={`/admin/task/page${this.state.page - 1}`} className="page-link" onClick={() => this.onPreviousPage()}>Previous</Link>
                            </li>
                        </ul>
                        <ul className="pagination justify-content-end col-6">
                            <li className="page-item col-2 text-center">
                                <Link to={`/admin/task/page${this.state.page + 1}`} className="page-link text-center" onClick={() => this.onNextPage()}>Next</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section >

        )
    }
}
export default TaskManager