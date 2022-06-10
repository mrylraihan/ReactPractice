import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/allnotes'>
                    <li>All Notes</li>
                </Link>
                <Link to='/makenote'>
                    <li>Make a Note</li>
                </Link>
                <Link to='/notebyname'>
                    <li>Find your note by name</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar