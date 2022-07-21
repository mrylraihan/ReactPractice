import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='app'>
            <ul>
                <Link to='/showAll'><li>see all</li></Link>
                <Link to='/findOne'><li>find one</li></Link>
                <Link to='/createOne'><li>create one</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
