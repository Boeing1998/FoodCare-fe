import React, { Component } from 'react'
import Container from './components/Member/Container'
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom"
class App extends Component {
    render() {
      
      return (
       <Router>
          <Container />
       </Router>
      )
    }
  }

export default App;