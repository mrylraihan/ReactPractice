import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul>
                <Link to='/home'><li>home</li></Link>
                <Link to='/about'><li>about</li></Link>
                <Link to='/extras'><li>extras</li></Link>
                
            </ul>
        </div>
    )
}

export default Navbar
