
import React, { Component } from 'react'
class Homepage extends Component {
    
    isAuth(){
        if(localStorage.getItem('token') !== null){
            return <h1 className="mx-auto">{localStorage.getItem('token') !== null ? <p>Hello Huy</p> : <p>Chua Login</p>}</h1>
        }else{
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

export default Homepage