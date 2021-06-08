import React, { Component } from 'react'
import MenuLeft from '../Layout/MenuLeft'
import { Link } from 'react-router-dom'
import '../../css/Diet.css'
import ModalForm from '../Modal/ModalMeals'
import '../../css/Modal.css'
class Meals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hide: false,
            showModal: false
        }
        this.onShow = this.onShow.bind(this)
        this.onShowModal = this.onShowModal.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
    }
    onShow() {
        this.setState({
            hide: !this.state.hide
        })
    }

    onShowModal() {
        this.setState({
            showModal: true
        })
    }

    onCloseModal() {
        this.setState({
            showModal: false
        })
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
                                            <Link className="tab-diet text-decoration-none active" to="/preferences/meals/">Meals &amp; Layout</Link>
                                        </li>
                                        <li className="ml-3">
                                            <Link className="tab-diet text-decoration-none " to="/preferences/savedplans">Saved Plans &amp; Ratings</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="week_layout_div"><div>
                            <div className="row col-12" id="week_layout_settings">
                                <div className="row settings_section_header">
                                    <div className="col-12">
                                        Meal Layout
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <span className="badge badge-info">Note</span> Changes will autosave, but will not affect current
                                            calendar meal plans unless you click "Apply changes" below.
                                    </div>
                                    <div className="col-12">
                                        <div className="row small_bottom_spacer">
                                            <div className="col-12 ">
                                                <span className="badge badge-info">Hey!</span> With a <a href="/choose-plan/">premium
                                            account</a>,
                                        you can set different meals and nutrition targets
                                        for each day of the week (like if you want different workout and rest days).
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-12 p-3">
                                        <div className="template_diet_list"><div>
                                            <div className="template_diets">
                                                <div className="single_template_row row justify-content-center col-10">
                                                    <div className="single_template_column template_column col-12 col-md-6 col-xl-4">
                                                        <div className="row">
                                                            <div className="col-12 template_title text-uppercase font-weight-bold   ">
                                                                Daily layout
                                                            </div>
                                                        </div>
                                                        <div className="row small_bottom_spacer">
                                                            <div className="col-12 options_bar_label">
                                                                Nutrition targets
                                                            </div>
                                                            <div className="col-12 template_targets"><div>
                                                                <div className="dropdown">
                                                                    <a href="#" className="btn btn-xs btn-outline-primary dropdown-toggle nutrition_targets_dropdown_button col-12" data-toggle="dropdown" data-boundary>
                                                                        <span className="nutrition_targets_title">Huy</span>
                                                                        <i className="fa fa-caret-down" aria-hidden="true" />
                                                                    </a>
                                                                    <ul className="dropdown-menu" id="nutrition_targets_dropdown">
                                                                    </ul>
                                                                </div>
                                                            </div></div>
                                                        </div>
                                                        <div className="row small_bottom_spacer">
                                                            <div className="col-12 template_meals_container">
                                                                <ul className="list-group" tabIndex={0}><li className="list-group-item" data-model-cid="c155">
                                                                    <div className="delete_template_meal"><i className="fa fa-times" aria-hidden="true" /></div>
                                                                    <div className="template_meal_title">
                                                                        Breakfast
                                                                    </div>

                                                                </li><li className="list-group-item" >
                                                                        <div className="delete_template_meal"><i className="fa fa-times" aria-hidden="true" /></div>
                                                                        <div className="template_meal_title">
                                                                            Huy
                                                                        </div>

                                                                    </li></ul>
                                                                <ModalForm id="Meals" />
                                                                <a href="#" className="btn btn-md btn-primary col-12">
                                                                    Apply changes to calendar meal plans</a>
                                                            </div>
                                                        </div>
                                                    </div></div>
                                                <div className="template_diet_row diet_row row" />
                                            </div>
                                        </div></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Meals