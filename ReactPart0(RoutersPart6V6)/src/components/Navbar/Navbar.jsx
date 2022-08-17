import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <ul>
        <Link to='/home'><li>home</li></Link>
        <Link to='/all'><li>all page</li></Link>
        <Link to='/about'><li>about</li></Link>
        <Link to='/add'><li>add one</li></Link>
        <Link to='/getByID'><li>Get by id</li></Link>
      </ul>
    </div>
  )
}

export default Navbar