import axios from 'axios'
import React, { Component } from 'react'
var check = []
class ManageUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            page: 1,
            hide: false,
        }
        this.onSelectedDelete = this.onSelectedDelete.bind(this)
    }
    componentDidMount() {

        axios.get(`https://reqres.in/api/users?page=${this.state.page}`)
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
        this.setState({
            data: this.state.data.filter((arr) => arr.id !== id)
        })
        for (let i = 0; i < this.state.data.length; i++) {
            if (this.state.data[i].id == id) {
                this.state.data.splice(i, 1)
                this.setState({
                    data: this.state.data
                })
            }
        }
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
    renderData = () => {
        let data = this.state.data
        if (data.length > 0) {
            return data.map((key, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <span className="custom-checkbox">
                                <input type="checkbox"
                                    aria-label="Checkbox for following text input"
                                    onClick={() => this.onSelect(key.id)}
                                // checked={true}
                                />
                            </span>
                        </td>
                        <td>{key.first_name + " " + key.last_name}</td>
                        <td>{key.email}</td>
                        <td><img src={key.avatar} alt="#" style={{ width: '75px' }} /></td>
                        <td>
                            <a href="#editEmployeeModal"
                                className="edit mr-3" data-toggle="modal">
                                <i className="bi bi-x-circle-fill text-warning" />
                            </a>
                            <a href="#deleteEmployeeModal"
                                className="delete" data-toggle="modal" onClick={() => this.onDelete(key.id)}>
                                <i className="bi bi-trash-fill text-danger" />
                            </a>
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
                                <div className="col-sm-3">
                                    <a href="#addEmployeeModal" className="btn btn-success mr-2" data-toggle="modal"> <span>Banned user</span></a>
                                    <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"
                                        onClick={() => this.onSelectedDelete(check)}> <span>Delete</span></a>
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
                                    <th> </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Image</th>
                                    <th>Actions</th>
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