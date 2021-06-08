
import React, { Component } from 'react'
import axios from 'axios'
import { USER_ROUTES } from '../../constants/routes'

import MenuLeft from '../Layout/MenuLeft'

const errorStyle = {
    color: 'red'
}
class ProfileInfo extends Component {
    constructor(props) {
        super(props)

    }
    isAuth() {
        if (localStorage.getItem('token') !== null) {
            return (
                <div className="container-fluit h-100">
                    <div className="row h-100">
                        <MenuLeft />
                        <div className='col-10'>
                            <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
                                    <h3 className="mb-4 mt-5">Your profile</h3>

                                </div>

                            </div>
                            <form className="form-horizontal padding-top7 col-12">
                                <fieldset>
                                    <div className="form-group row">
                                        <label htmlFor="goal-radio" className="col-12 col-sm-4 col-form-label">
                                            I want to
                    </label>
                                        <div className="col-12 col-sm-8">
                                            <div className="row">
                                                <div
                                                    className="goal_help_tooltip left_form_tooltip"
                                                    data-original-title
                                                    title
                                                >
                                                    <i className="fa fa-question-circle-o" aria-hidden="true" />
                                                </div>
                                                <div
                                                    className="col-12 three-segment-radio"
                                                    data-editors="goal"
                                                    id="goal-radio"
                                                >
                                                    <div
                                                        id="c62_goal"
                                                        className="btn-group btn-group-toggle"
                                                        name="goal"
                                                        data-toggle="buttons"
                                                    >
                                                        <label htmlFor="c62_goal-0" className="btn btn-outline-primary ">
                                                            <input
                                                                type="radio"
                                                                name="goal"
                                                                defaultValue="L"
                                                                id="c62_goal-0"
                                                            />
                Lose weight
                            </label>
                                                        <label htmlFor="c62_goal-1" className="btn btn-outline-primary ">
                                                            <input
                                                                type="radio"
                                                                name="goal"
                                                                defaultValue="M"
                                                                id="c62_goal-1"
                                                            />
                Maintain
                            </label>
                                                        <label htmlFor="c62_goal-2" className="btn btn-outline-primary ">
                                                            <input
                                                                type="radio"
                                                                name="goal"
                                                                defaultValue="G"
                                                                id="c62_goal-2"
                                                            />
                Gain weight
                            </label>
                                                        <label htmlFor="c62_goal-2" className="btn btn-outline-primary ">
                                                            <input
                                                                type="radio"
                                                                name="goal"
                                                                defaultValue="G"
                                                                id="c62_goal-2"
                                                            />
                Build muscle
              </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="gender-radio" className="col-12 col-sm-4 col-form-label">
                                            I am
      </label>
                                        <div
                                            className="col-12 col-sm-8 two-segment-radio"
                                            data-editors="gender"
                                            id="gender-radio"
                                        >
                                            <div
                                                id="c62_gender"
                                                className="btn-group btn-group-toggle"
                                                name="gender"
                                                data-toggle="buttons"
                                            >
                                                <label htmlFor="c62_gender-0" className="btn btn-outline-primary ">
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        defaultValue="M"
                                                        id="c62_gender-0"
                                                    />
            Male
          </label>
                                                <label htmlFor="c62_gender-1" className="btn btn-outline-primary ">
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        defaultValue="F"
                                                        id="c62_gender-1"
                                                    />
            Female
          </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="height-inputs" className="col-12 col-sm-4 col-form-label">
                                            Height
      </label>
                                        <div className="inline_block col-12 col-sm-8" id="height-inputs">
                                            <div className="row">
                                                <div className="col-6 imperial_inputs">
                                                    <input
                                                        id="height-primary"
                                                        name="height_primary"
                                                        className="form-control inline_block"
                                                        type="text"
                                                        placeholder="m"
                                                    />

                                                </div>
                                                <div className="col-6">
                                                    <input
                                                        id="height-secondary"
                                                        name="height_secondary"
                                                        className="form-control inline_block"
                                                        type="text"
                                                        placeholder="cm"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="weight-input" className="col-12 col-sm-4 col-form-label">
                                            Weight
      </label>
                                        <div className="inline_block col-12 col-sm-4" id="weight-input">
                                            <input
                                                id="weight"
                                                name="weight"
                                                className="form-control inline_block"
                                                type="text"
                                                placeholder="kgs"
                                            />

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="age" className="col-12 col-sm-4 col-form-label">
                                            Age
      </label>
                                        <div className="col-12 col-sm-4" id="age-input">
                                            <input
                                                name="age"
                                                id="age"
                                                className="form-control inline_block"
                                                type="date"
                                            />

                                        </div>
                                    </div>
                                </fieldset>
                                <button className="btn btn-primary mx-auto" type="submit">Update</button>
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

export default ProfileInfo;