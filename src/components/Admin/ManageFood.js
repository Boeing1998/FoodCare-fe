import React, { Component } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { USER_ROUTES } from '../../constants/routes'
import { Link, withRouter } from 'react-router-dom'
import { Modal } from '@material-ui/core'
import '../../css/Modal.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const addingNotify = () => {
    toast.success('🦄 Adding food...', { position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
}
const deleteNotify = () => {
    toast.error('🦄 Deleting food...', { position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
}
const editNotify = () => {
    toast.warn('🦄 Editing food...', { position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
}

class ManageFood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [], data1: {}, page: 1, open: false, open1: false, food_name: '', calories: '', carbs: '', fats: '', proteins: '',
            food_nameErr: '', caloriesErr: '', carbsErr: '', fatsErr: '', proteinsErr: '', noti: '', images: {}, thumbnail: '',
            show: 'Active', hide: 'Unactive', status: '', checked: '', dataFilter: [], custom: true, request: true
        }
    }
    componentDidMount = async () => {
        const confiq = await {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        }
        // let key = await `?&page=${this.state.page}&type=all&limit=6`
        let key = await `?page=${this.state.page}&type=all&limit=6`
        await axios.get(USER_ROUTES.FOODSFORADMIN + key, confiq)
            .then(res => {
                const randomData = _.shuffle(res.data.data)
                this.setState({
                    data: randomData,
                    dataFilter: randomData
                })
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
        let key = await `?&page=${this.state.page}&type=all&limit=6`
        await axios.get(USER_ROUTES.FOODSFORADMIN + key, confiq)
            .then(res => {
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
        let key = await `?&page=${this.state.page}&type=all&limit=6`
        await axios.get(USER_ROUTES.FOODSFORADMIN + key, confiq)
            .then(res => {
                const randomData = _.shuffle(res.data.data)
                this.setState({
                    data: randomData
                })
            })
    }

    onInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(e.target.value)
    }

    onDelete = async (e, id) => {
        e.preventDefault()
        const confiq = {
            headers: {
                Authorization: 'token ' + localStorage.getItem('token')
            }
        }
        await axios.patch(USER_ROUTES.DELETEFOODS + id, {}, confiq)

        let key = await `?&page=${this.state.page}&type=all&limit=6`
        await axios.get(USER_ROUTES.FOODSFORADMIN + key, confiq)
            .then(res => {
                this.setState({
                    data: res.data.data
                })
            })
    }
    onCreateFood = async (e) => {
        e.preventDefault()
        let check = true
        if (this.state.food_name == '') {
            check = false
            this.setState({
                food_nameErr: 'Not be empty'
            })
        } else {
            this.setState({
                food_nameErr: ''
            })
        }
        if (this.state.calories == '') {
            check = false
            this.setState({
                caloriesErr: 'Not be empty'
            })
        } else {
            this.setState({
                caloriesErr: ''
            })
        } if (this.state.carbs == '') {
            check = false
            this.setState({
                carbsErr: 'Not be empty'
            })
        } else {
            this.setState({
                carbsErr: ''
            })
        } if (this.state.fats == '') {
            check = false
            this.setState({
                fatsErr: 'Not be empty'
            })
        } else {
            this.setState({
                fatsErr: ''
            })
        } if (this.state.proteins == '') {
            check = false
            this.setState({
                proteinsErr: 'Not be empty'
            })
        } else {
            this.setState({
                proteinsErr: ''
            })
        }
        if (check) {
            const confiq = {
                headers: {
                    Authorization: 'token ' + localStorage.getItem('token')
                }
            }
            let data = {
                food_name: this.state.food_name,
                custom: this.state.custom,
                request: this.state.request,
                image: this.state.thumbnail,
                nutrions: {
                    calories: this.state.calories,
                    carbs: this.state.carbs,
                    fats: this.state.fats,
                    proteins: this.state.proteins,

                }
            }
            await axios.post(USER_ROUTES.CREATEFOODS, data, confiq)
                .then(res => {
                    if (res.data.status == 200) {
                        this.setState({
                            noti: res.data.message
                        })
                    }
                })

            let key = await `?&page=${this.state.page}&type=all&limit=6`
            await axios.get(USER_ROUTES.FOODSFORADMIN + key, confiq)
                .then(res => {
                    console.log(res.data)
                    const orderBy = _.orderBy(res.data.data, ['created_at'], ['desc'])
                    this.setState({
                        data: orderBy,
                    })
                })
        }

    }
    onDetailFood = async (id) => {
        axios.get(USER_ROUTES.FOODS + id)
            .then(res => {
                this.setState({
                    data1: res.data.data, food_name: res.data.data.food_name, calories: res.data.data.nutrions.calories,
                    carbs: res.data.data.nutrions.carbs, fats: res.data.data.nutrions.fats, proteins: res.data.data.nutrions.proteins,
                })
            })
    }
    onModal = () => {
        let data = this.state.data1
        if (this.state.data1) {
            return <Modal id="check"
                open={this.state.open}
                aria-hidden="true">
                <form onSubmit={(e) => this.onEditFood(e, data._id)}>
                    <div className="modal" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Food</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                        onClick={() => this.setState({
                                            open: false
                                        })}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                                <p className="d-block mx-auto" style={{ color: 'green', fontSize: '18px' }}>{this.state.noti}</p>
                                <div className="modal-body">
                                    <p>Food name : </p>
                                    <input name="food_name" type="text" value={this.state.food_name} onChange={(e) => this.onInput(e)} />
                                    <p>calories : </p>
                                    <input name="calories" type="text" onChange={(e) => this.onInput(e)} value={this.state.calories} />
                                    <p>carbs : </p>
                                    <input name="carbs" type="text" onChange={(e) => this.onInput(e)} value={this.state.carbs} />
                                    <p>fats : </p>
                                    <input name="fats" type="text" onChange={(e) => this.onInput(e)} value={this.state.fats} />
                                    <p>proteins : </p>
                                    <input name="proteins" type="text" onChange={(e) => this.onInput(e)} value={this.state.proteins} />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-secondary" data-dismiss="modal" onClick={editNotify}>Edit</button>
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={2000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        }
    }
    onEditFood = async (e, idFood) => {
        e.preventDefault()
        const confiq = {
            headers: {
                'Authorization': 'token ' + localStorage.getItem('token')
            }
        }
        const data = {
            foodId: idFood,
            food_name: this.state.food_name,
            nutrions: {
                calories: this.state.calories,
                carbs: this.state.carbs,
                fats: this.state.fats,
                proteins: this.state.proteins,
                fiber: this.state.fiber,
                cholesterol: this.state.cholesterol,
            }
        }
        await axios.patch(USER_ROUTES.EDITFOOD, data, confiq)
            .then(res => {
                if (res.data.status == 200) {
                    this.setState({
                        noti: res.data.message
                    })
                }
            })
        let key = await `?&page=${this.state.page}&type=all&limit=6`
        await axios.get(USER_ROUTES.FOODSFORADMIN + key, confiq)
            .then(res => {
                const orderBy = _.orderBy(res.data.data, ['created_at'], ['desc'])
                this.setState({
                    data: orderBy,
                })
            })
    }
    onSetStatus = async (idFood, status) => {
        const confiq = {
            headers: {
                'Authorization': 'token ' + localStorage.getItem('token')
            }
        }
        this.setState({
            status: status
        })
        const data = {
            foodId: idFood,
            status: status
        }
        await axios.patch(USER_ROUTES.EDITFOOD, data, confiq)
    }
    onChangeStatus = async (foodItem) => {
        await this.setState({
            data: this.state.data.map((key) => key._id === foodItem._id ? foodItem : key)
        })
        this.onSetStatus(foodItem._id, foodItem.status)
    }
    onSelectStatus = async (e) => {
        if (e.target.value == 1) {
            this.setState({
                data: this.state.dataFilter
            })
        } else {
            this.setState({
                data: this.state.dataFilter.filter((items) => items.status == e.target.value)
            })
        }
    }
    renderFood() {
        let data = this.state.data
        if (data) {
            if (data.length > 0) {
                return data.map((key, index) => {
                    console.log()
                    return (
                        <tr key={index}>
                            <td className="text-left" ><img src={key.image} style={{ width: '80px', height: '80px' }} /></td>
                            <td className="text-left" >{key.food_name}</td>
                            <td className="text-left">{(key.nutrions.calories).toFixed(2)}</td>
                            <td className="text-left">{(key.nutrions.carbs).toFixed(2)}</td>
                            <td className="text-left">{(key.nutrions.fats).toFixed(2)}</td>
                            <td className="text-left">{(key.nutrions.proteins).toFixed(2)}</td>
                            <td className="text-left col-1">
                                {key.status !== 'show' ? <label className="text-secondary">Unactive</label> : <label className="text-success">Active</label>}
                            </td>
                            <td className="text-center">
                                <div className="form-check form-switch">
                                    <input name='status' className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                                        checked={key.status !== 'show' ? false : true}
                                        onChange={() => this.onChangeStatus({ ...key, status: key.status == 'hide' ? 'show' : 'hide' })} />
                                </div>
                            </td>
                            <td className="text-left">
                                <div>
                                    <i className="fas fa-edit btn btn-warning"
                                        onClick={() => {
                                            this.onDetailFood(key._id);
                                            this.setState({
                                                open: true
                                            })
                                        }} />
                                    {this.onModal()}
                                </div>
                            </td>

                            <td className="text-left" onClick={(e) => this.onDelete(e, key._id)} ><i className="bi bi-trash-fill btn btn-dark" onClick={deleteNotify} /></td>
                            <td>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={3000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                />
                            </td>
                        </tr>

                    )
                })
            } else {
                return <tr>
                    <div className="col-12" style={{ left: '250%', top: '6px' }}>
                        <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
                                        Loading...
                                    </button>
                    </div>
                </tr>
            }
        }
    }
    render() {
        return (
            <section id="shopping-cart " style={{ marginLeft: '230px' }}>
                <div className="row g-0" >
                    <div className="col-12 ">
                        <div className="row border-0 bg-white">
                            <div className="card-content col-2 pt-5 pl-4">
                                <h4 className="card-title">Manage Food</h4>
                            </div>
                            <div className="card-content ml-auto col-4 pt-5 ">
                                <div className="card-body table-responsive p-0">
                                    <ul className="table text-center m-0 list-unstyled row">
                                        <div className="input-group col-5">
                                            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" /><button className="btn btn-outline-secondary" type="button" id="button-addon2">
                                                <i className="bi bi-search" />
                                            </button>
                                        </div>
                                        <div className="input-group col-3">
                                            <select className="form-select" aria-label="Default select example" onChange={(e) => this.onSelectStatus(e)}>
                                                <option value={1} defaultValue={true} >All</option>
                                                <option value='show'>Show</option>
                                                <option value="hide">Hide</option>
                                            </select>
                                        </div>
                                        <button type="submit"
                                            className="btn btn-success col-3"
                                            onClick={() => this.setState({
                                                open1: true
                                            })}>
                                            Add foods
                                            </button>

                                        <Modal
                                            open={this.state.open1}
                                            aria-labelledby="simple-modal-title"
                                            aria-describedby="simple-modal-description"
                                        >
                                            <form onSubmit={(e) => this.onCreateFood(e)}>
                                                <div className="modal" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                                                    <div className="modal-dialog" role="document">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title">Create food</h5>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                                                    onClick={() => this.setState({
                                                                        open1: false
                                                                    })}>
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <p className="d-block mx-auto" style={{ color: 'green', fontSize: '18px' }}>{this.state.noti}</p>
                                                            <div className="modal-body">
                                                                <p>Food name : </p>
                                                                <div>
                                                                    <input className="d-inline " name="food_name" type="text" onChange={(e) => this.onInput(e)} />
                                                                    <p className="d-inline text-danger ml-2">{this.state.food_nameErr}</p>
                                                                </div>
                                                                <p>Image : </p>
                                                                <div>
                                                                    <input className="d-inline " name="thumbnail" type="text" onChange={(e) => this.onInput(e)} />
                                                                </div>
                                                                <p>calories : </p>
                                                                <div>
                                                                    <input name="calories" type="text" onChange={(e) => this.onInput(e)} />
                                                                    <p className="d-inline text-danger ml-2">{this.state.caloriesErr}</p>
                                                                </div>
                                                                <p>carbs : </p>
                                                                <div>
                                                                    <input name="carbs" type="text" onChange={(e) => this.onInput(e)} />
                                                                    <p className="d-inline text-danger ml-2">{this.state.carbsErr}</p>
                                                                </div>
                                                                <p>fats : </p>
                                                                <div>
                                                                    <input name="fats" type="text" onChange={(e) => this.onInput(e)} />
                                                                    <p className="d-inline text-danger ml-2">{this.state.fatsErr}</p>
                                                                </div>
                                                                <p>proteins : </p>
                                                                <div>
                                                                    <input name="proteins" type="text" onChange={(e) => this.onInput(e)} />
                                                                    <p className="d-inline text-danger ml-2">{this.state.proteinsErr}</p>
                                                                </div>

                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="submit" className="btn btn-secondary" data-dismiss="modal"
                                                                    onClick={addingNotify}>Create</button>
                                                                <ToastContainer
                                                                    position="top-right"
                                                                    autoClose={3000}
                                                                    hideProgressBar={false}
                                                                    newestOnTop={false}
                                                                    closeOnClick
                                                                    rtl={false}
                                                                    pauseOnFocusLoss
                                                                    draggable
                                                                    pauseOnHover
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </Modal>

                                    </ul>
                                </div>
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
                                                <th className="border-top-0 text-left">Product</th>
                                                <th className="border-top-0 text-left">Calories</th>
                                                <th className="border-top-0 text-left">Carbs</th>
                                                <th className="border-top-0 text-left">Fats</th>
                                                <th className="border-top-0 text-left">Proteins</th>
                                                <th className="border-top-0 text-left ">
                                                    Status
                                                </th>
                                                <th className="border-top-0 ">Action</th>
                                                <th className="border-top-0 text-left">Edit</th>
                                                <th className="border-top-0 text-left">Remove</th>
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
                    <div className="row">
                        <ul className="pagination justify-content-start col-6">
                            <li className={this.state.page > 1 ? 'page-item col-2 ml-4 text-center' : 'page-item col-2 disabled ml-4 text-center'}>
                                <Link
                                    to={`/admin/food/page${this.state.page - 1}`}
                                    className="page-link"
                                    onClick={() => this.onPreviousPage()}>Previous</Link>
                            </li>
                        </ul>
                        <ul className="pagination justify-content-end col-6">
                            <li className="page-item col-2 text-center">
                                <Link
                                    to={`/admin/food/page${this.state.page + 1}`}
                                    className="page-link t
                                ext-center"  onClick={() => this.onNextPage()} >Next
                                
                                </Link>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={3000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </section >

        )
    }
}
export default withRouter(ManageFood)