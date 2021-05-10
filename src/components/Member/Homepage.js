
import React, { Component } from 'react'
class Homepage extends Component {
    
    // constructor(props){

    // }
    componentDidMount = async() => {
        const token = await localStorage.getItem('token')
        
    }
    check(){
        if(this.props.token !== null){
            console.log('ok')
        }else{
            console.log('nothing')
        }
    }
    render() {
        return (
            <h1>{this.props.token !== null ? <p>Hello Huy</p> : <p>Chua Login</p>}</h1>
        )
    }
}

export default Homepage