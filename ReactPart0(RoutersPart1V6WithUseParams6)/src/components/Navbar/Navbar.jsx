import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <h1>Navbar</h1>
        <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/SeeAll'><li>see all</li></Link>
              <Link to='/Create'><li>create post</li></Link>
              <Link to='/About'><li>about</li></Link>
              <Link to='/Extra'><li>extra</li></Link>
        </ul>
    </div>
  )
}

export default Navbar