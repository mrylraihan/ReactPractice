import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
            <Link to={'/'}><li>Blank</li></Link>
            <Link to={'/home'}><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar