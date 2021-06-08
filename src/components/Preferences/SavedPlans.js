import React, { Component } from 'react'
import MenuLeft from '../Layout/MenuLeft'
import { Link } from 'react-router-dom'
import { USER_ROUTES } from '../../constants/routes'
import '../../css/Diet.css'
import _ from 'lodash'
import axios from 'axios'
const image = { width: '80px' }
const svg = { top: '18px', left: '52%' }

class SavedPlans extends Component {
    constructor(props) {
        super(props)
        this.state = {
            food_name: '',
            images: '',
            data: [],
            likefood: [],
            page: 0
        }
    }
    componentDidMount = async () => {
        const confiq = await {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        }
        let key = await `?&page=${this.state.page}&type=all&limit=6`
        await axios.get(USER_ROUTES.FOODS + key, confiq)
            .then(res => {
                const randomData = _.shuffle(res.data.data)
                this.setState({
                    data: randomData
                })
            })
    }

    onSave = (id) => {
        let obj = this.state.data.find(obj => obj.id == id)
        if (this.checkExist(obj.id) == false) {
            this.state.likefood.push(obj.id)
        } else {
            this.state.likefood.map((key, index) => {
                if (key == id) {
                    this.state.likefood.splice(index, 1)
                }
            })
        }
        this.setState({})
    }
    checkExist = (id) => {
        let idFood = this.state.likefood.find((el) => el == id);
        if (idFood) {
            return true;
        }
        return false;
    }
    checkactive = (id) => {
        return this.state.likefood.map((key, index) => {
            return (
                key == id ? (<use key={index} xlinkHref="#icon-thumbs-up-green" />) : (<use key={index} xlinkHref="#icon-thumbs-up-black" />)
            )
        })
    }
    renderData() {
        let data = this.state.data
        if (data.length > 0) {
            return data.map((key, index) => {
                return (
                    <li key={index} className="row border">
                        <div className="col-10 ">
                            <img style={image} src={`https://images.eatthismuch.com${key.images.main}`} alt=""></img>
                            <Link className="pl-2" to='#'>{key.food_name}</Link>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-link"
                                onClick={() => this.onSave(key.id)}>
                                <svg style={svg} className="etm-icon etm-icon-md ">
                                    {this.state.likefood.length == 0 ? <use key={index} xlinkHref="#icon-thumbs-up-black " /> : this.checkactive(key.id)}
                                </svg>
                            </button>

                        </div>
                    </li>
                )
            })
        }
    }
    onShowMoreFood = async (e) => {
        e.preventDefault()
        this.setState({
            page: this.state.page + 1
        })
        const confiq = await {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        }
        let key = await `?&page=${this.state.page+1}&type=all&limit=6`
        await axios.get(USER_ROUTES.FOODS + key, confiq)
            .then(res => {
                const randomData = _.shuffle(res.data.data)
                this.setState({
                    data: randomData
                })
            })
            console.log(this.state.page)
    }
    render() {
        return (
            <div className="container-fluit h-100">
                <div className="row h-100">
                    <MenuLeft />
                    <div className='col-10'>
                        <div className=" img-circle text-center mt-5 pt-5 mb-3">
                            <div className="container mb-3">
                                <div className="row align-items-center h-100">
                                    <ul class="nav">
                                        <li>
                                            <Link className="tab-diet text-decoration-none " to="/preferences/diet/">
                                                Diet &amp; Nutrition
                                            </Link>
                                        </li>
                                        <li className="ml-3">
                                            <Link className="tab-diet text-decoration-none " to="/preferences/meals/">Meals &amp; Layout</Link>
                                        </li>
                                        <li className="ml-3">
                                            <Link className="tab-diet text-decoration-none active" to="/preferences/savedplans">Saved Plans &amp; Ratings</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row col-5">
                            <ul className="list-group col-12 mt-5">
                                <div className="col-4">
                                    <h3>Rate foods</h3>
                                </div>
                                {this.renderData()}

                                <li className="list-group col-4 mt-2 mx-auto">
                                    <div className="col-12">
                                        <button type="button" className="btn btn-primary"
                                            onClick={(e) => this.onShowMoreFood(e)}>
                                            Show {Object.keys(this.state.data).length} new foods
                                            </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
export default SavedPlans