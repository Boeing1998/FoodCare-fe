import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuLeft extends Component {
    render() {
        return (
            <div className="col-2 bg-dark" style={{maxWidth:'12%'}}>
                <div className=" p-4 h-25 d-inline-block">


                </div>
                <div className="nav flex-column nav-pills mb-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <Link className="nav-link btn btn-secondary text-white" id="account-tab" data-toggle="pill" to="/account" role="tab" aria-controls="account" aria-selected="true">
                        <i className="fa fa-home text-center mr-1" />
        My profile
      </Link>

                </div>
                <div className="nav flex-column nav-pills mb-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <Link className="nav-link btn btn-secondary text-white" id="account-tab" data-toggle="pill" to="/changepw" role="tab" aria-controls="account" aria-selected="true">
                        <i className="fa fa-home text-center mr-1" />
        Change password
      </Link>

                </div>
                <div className="nav flex-column nav-pills mb-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <Link className="nav-link btn btn-secondary text-white" id="account-tab" data-toggle="pill" to="/preferences/diet" role="tab" aria-controls="account" aria-selected="true">
                        <i className="fa fa-home text-center mr-1" />
        Preferences
      </Link>

                </div>
            </div>

        )

    }
}

export default MenuLeft;

