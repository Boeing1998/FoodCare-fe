import React, { Component } from 'react'
import MenuLeft from '../Layout/MenuLeft'
import '../../css/Diet.css'
import { Link } from 'react-router-dom'
import ModalForm from '../Modal/ModalDiet'
const unSelect = {
    textDecoration: 'line-through',
    color: 'red',
    border: '1px solid red'
}
class Diet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 1,
            fish: false,
            dairy: false,
            soy: false,
            fruit: false,
            legumes: false,
            fats: false,
            vegetables: false,
            meat: false,
        }
        this.onActive = this.onActive.bind(this)
    }
    onActive = (key) => {
        this.setState({
            active: key
        })
    }
    render() {
        return (
            <div className="container-fluit h-100">
                <div className="row h-100">
                    <MenuLeft />
                    <div className='col-10 '>
                        <div className=" img-circle text-center mt-5 pt-5 mb-3">
                            <div className="container mb-3">
                                <div className="row align-items-center h-100">
                                    <ul className="nav">
                                        <li>
                                            <Link className="tab-diet active text-decoration-none" to="/preferences/diet/">
                                                Diet &amp; Nutrition
                                            </Link>
                                        </li>
                                        <li className="ml-3">
                                            <Link className="tab-diet text-decoration-none" to="/preferences/meals/">Meals &amp; Layout</Link>
                                        </li>
                                        <li className="ml-3">
                                            <Link className="tab-diet text-decoration-none" to="/preferences/savedplans">Saved Plans &amp; Ratings</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3 ml-2">
                            <div className="col-12 helper-text">
                                <p>
                                    We'll base your meals off this main diet type. Choose "Anything" to customize your own
                                    unique diet from
                                    scratch.
                                </p>
                                <p>
                                    Change your diet type? <a href="#" className="update_targets_modal">Click here
                                    to update your suggested nutrition targets</a>
                                </p>
                            </div>
                            <div className="col-12 col-lg-9  ">
                                <div className="row">
                                    <div className="col-8 content_container preset_selector_div border p-3">
                                        <ul className="nav nav-pills preset_selector no-gutters text-center">
                                            <li className="nav-item col-4 col-sm-2" >
                                                <a className={`nav-link ${this.state.active == 1 ? 'active' : ''}`}  onClick={() => this.onActive(1)}>
                                                    <svg className="etm-diet-icon">
                                                        <use xlinkHref="#icon-sandwich-40" />
                                                    </svg>
              Anything
            </a>
                                            </li>
                                            <li className="nav-item col-4 col-sm-2" >
                                                <a className={`nav-link ${this.state.active == 2 ? 'active' : ''}`}  onClick={() => this.onActive(2)}>
                                                    <svg className="etm-diet-icon">
                                                        <use xlinkHref="#icon-paleo-diet-40" />
                                                    </svg>
              Paleo
            </a>
                                            </li>
                                            <li className="nav-item col-4 col-sm-2" data-value="vegetarian">
                                                <a className={`nav-link ${this.state.active == 3 ? 'active' : ''}`}  onClick={() => this.onActive(3)}>
                                                    <svg className="etm-diet-icon">
                                                        <use xlinkHref="#icon-broccoli-40" />
                                                    </svg>
              Vegetarian</a>
                                            </li>
                                            <li className="nav-item col-4 col-sm-2" data-value="vegan">
                                                <a className={`nav-link ${this.state.active == 4 ? 'active' : ''}`}  onClick={() => this.onActive(4)}>
                                                    <svg className="etm-diet-icon">
                                                        <use xlinkHref="#icon-vegan-symbol-40" />
                                                    </svg>
              Vegan</a>
                                            </li>
                                            <li className="nav-item col-4 col-sm-2">
                                                <a className={`nav-link ${this.state.active == 5 ? 'active' : ''}`}  onClick={() => this.onActive(5)}>
                                                    <svg className="etm-diet-icon">
                                                        <use xlinkHref="#icon-no-gluten-40" />
                                                    </svg>
              Ketogenic</a>
                                            </li>
                                            <li className="nav-item col-4 col-sm-2" >
                                                <a className={`nav-link ${this.state.active == 6 ? 'active' : ''}`}  onClick={() => this.onActive(6)}>
                                                    <svg className="etm-diet-icon">
                                                        <use xlinkHref="#icon-olive-40" />
                                                    </svg>
              Mediterranean</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row mt-3 ml-1">
                            <div className="col-10 content_container border p-2 mt-2">
                                <div className="row mx-auto">
                                    <label className="col-10 col-form-label">Common allergies</label>
                                    <ul className="nav nav-list tight-nav list-group col-3" style={{alignContent:'center'}} >
                                        <li className="btn btn-light list-group-item col-5 mt-2"
                                            style={this.state.fish !== true ? null : unSelect}
                                            onClick={() => this.setState({
                                                ...this.state,
                                                fish: !this.state.fish
                                            })}>
                                            <a >Fish</a>
                                        </li>
                                        <li className="btn btn-light list-group-item col-5 mt-2"
                                            style={this.state.legumes !== true ? null : unSelect}
                                            onClick={() => this.setState({
                                                ...this.state,
                                                legumes: !this.state.legumes,
                                                
                                            })}>
                                            <a>Legumes</a></li>
                                    </ul>


                                    <ul className="nav nav-list tight-nav list-group col-3 " style={{alignContent:'center'}} >
                                        <li className="btn btn-light list-group-item col-5 mt-2"
                                            style={this.state.dairy !== true ? null : unSelect}
                                            onClick={() => this.setState({
                                                ...this.state,
                                                dairy: !this.state.dairy
                                            })}>
                                            <a>Dairy</a></li>

                                        <li className="btn btn-light list-group-item col-5 mt-2"
                                            style={this.state.fats !== true ? null : unSelect}
                                            onClick={() => this.setState({
                                                ...this.state,
                                                fats: !this.state.fats
                                            })}>
                                            <a>Fats & Nuts</a></li>
                                    </ul>


                                    <ul className="nav nav-list tight-nav list-group col-3 " style={{alignContent:'center'}} >
                                        <li className="btn btn-light list-group-item col-5 mt-2"
                                            style={this.state.soy !== true ? null : unSelect}
                                            onClick={() => this.setState({
                                                ...this.state,
                                                soy: !this.state.soy
                                            })}>
                                            <a>soy</a></li>
                                        <li className="btn btn-light list-group-item col-5 mt-2"
                                            style={this.state.vegetables !== true ? null : unSelect}
                                            onClick={() => this.setState({
                                                ...this.state,
                                                vegetables: !this.state.vegetables
                                            })}>
                                            <a>Vegetables</a></li>
                                    </ul>


                                    <ul className="nav nav-list tight-nav list-group col-3 " style={{alignContent:'center'}} >
                                        <li className="btn btn-light list-group-item col-5 mt-2"
                                            style={this.state.fruit !== true ? null : unSelect}
                                            onClick={() => this.setState({
                                                ...this.state,
                                                fruit: !this.state.fruit
                                            })}>
                                            <a>fruit</a></li>
                                        <li className="btn btn-light list-group-item col-5 mt-2"
                                            style={this.state.meat !== true ? null : unSelect}
                                            onClick={() => this.setState({
                                                ...this.state,
                                                meat: !this.state.meat
                                            })}>
                                            <a>Red meat</a></li>                                    </ul>



                                </div>
                            </div>

                        </div>

                        <div className="row mt-3 ml-1">
                            <div className="border col-10" >

                                <div className="row nutrition_profile_row mb-3 mt-3 ">
                                    <div className="col-8">
                                        <div className="row">
                                            <div className="col-12">
                                                <span className="meal_title wrap_or_truncate">Huy</span>
                                            </div>
                                        </div>
                                        <div className="row nutrition_profile_description">
                                            <div className="col-12">
                                                1000 Calories
                                                •
                                            <span className="carbs-col">60g - 140g C</span> •
                                            <span className="fats-col">20g - 60g F</span> •
                                            <span className="proteins-col">60g - 140g P</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 edit_meal_type_buttons text-right">
                                        <div className="edit_nutrition_profile small_bottom_spacer">
                                            <a href="#">Edit Options</a>
                                        </div>
                                        <div className="delete_nutrition_profile">
                                            <a href="#"><i className="fa fa-trash-o" /> Delete</a>
                                        </div>

                                    </div>
                                </div>
                                <div className="row  col-3 mx-auto mb-3 mt-3">

                                    <ModalForm id="Diet" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div >

            </div >




        )
    }
}
export default Diet