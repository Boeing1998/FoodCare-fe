// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
// import Login from '../Member/Login'
// import Register from '../Member/Register'
// import ProfileUser from '../Member/ProfileUser'


// class Header extends Component {
//     render() {
//         return (
//             <Router>
//                 <div className="App">
//                     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//                         <div className="container">
//                             <Link className="navbar-brand" to={"/"}>positronX.io</Link>
//                             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                             </div>
//                         </div>
//                     </nav>

//                     <div className="auth-wrapper">
//                         <div className="auth-inner">
//                             <Switch>
//                                 {/* <Route exact path='/' component={Homepage}></Route> */}
//                                 {/* <Route path="/login" component={Login} /> */}
//                                 <Route path="/register" component={Register} />
//                             </Switch>
//                         </div>
//                         {/* <Route path="/profile" component={() => (this.state.token ? (<ProfileUser />) : (<Login />))} /> */}
//                         {/* <Route path="/" component={() => (this.state.token ? (<Homepage />) : (<Redirect to='/login' />))} /> */}
//                     </div>
//                 </div>
//             </Router>
//         )

//     }
// }

// // const Layout = (props) => {
// //     // <Header >
// //     //     {props.children}
// //     // </Header>
// //     // <Notification></Notification>
// //     // <Footer></Footer>
// // };

// export default Header;