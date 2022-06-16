import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to={'/'}><h1>NavBar</h1></Link>
            <ul>
                <Link to={'/Products'}><li>Products</li></Link>
               
               
            </ul>
        </div>
    )
}

export default Navbar