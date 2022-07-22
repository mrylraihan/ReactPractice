import React from 'react'
import {useNavigate} from 'react-router-dom'
const About = () => {
    const nav = useNavigate()
    return (
        <div className='app'>
            <h1>About</h1>
            <button onClick={nav.bind(this, '/')}> go to main</button>
        </div>
    )
}

export default About