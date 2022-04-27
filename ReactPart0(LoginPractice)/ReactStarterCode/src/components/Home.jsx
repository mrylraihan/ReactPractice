import React from 'react'
import { Redirect } from 'react-router-dom'

const Home = (props) => {
    if(!props.isTrue){
        return <Redirect to='/' />
    }
    return (
        <div>
            <h1>Hello</h1>
            <h1>Welcome Home ! {props.user.name}</h1>
            <button onClick={()=>{props.setIsTrue(false)}}>SignOut</button>
        </div>
    )
}

export default Home