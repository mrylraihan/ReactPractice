import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const nav = useNavigate()
  return (
    <div>
        <h1>Navbar</h1>
        <ul>
        <Link to={'/home'}><li>home</li></Link>
        <li onClick={nav.bind(this,'/renderlist')}>list</li>
        </ul>
    </div>
  )
}

export default Navbar