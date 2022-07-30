import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <ul>
                <Link to='/'><li>Main</li></Link>
                <Link to='/home'><li>Home</li></Link>
                <Link to='/create'><li>Create One</li></Link>
                <Link to='/about'><li>about</li></Link>

            </ul>
        </>
    )
}

export default Navbar
