import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='app'>
          <h1>Nav</h1>
        <ul>
              <Link to={`/`}><li>Home</li></Link>
              <Link to={`/getAll`}><li>Get all</li></Link>
              <Link to={`/create`}><li>Create one</li></Link>
              <Link to={`/about`}><li>About</li></Link>
              <Link to={`/extras`}><li>Extras</li></Link>
            <li>Get one By id</li>
  
        </ul>
    </div>
  )
}

export default Nav