import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/Layout.css'

class AdminHeader extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-none" id="header-admin">
                <div className="container-fluid">
                    <Link className="navbar-brand col-2" to={'/admin'} style={{color:'wheat'}} >
                        <i className="fas fa-cheese text-warning"/>
                            FoodCare
                        </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <form className="d-flex mr-0">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search"/></button>
                            </div>

                        </form>
                        <div className="btn-group ">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-person"></i>
                            </button>
                            <ul className="dropdown-menu" style={{ right: '0', left: '-120px' }}
                                aria-labelledby="navbarDropdown">
                                <li><Link to={'/admin'} className="dropdown-item" >Profile</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to={'/login'} className="dropdown-item" onClick={() => localStorage.clear()}>Logout</Link></li>
                            </ul>

                        </div>

                    </div>
                </div>
            </nav>

        )
    }
}

export default AdminHeader