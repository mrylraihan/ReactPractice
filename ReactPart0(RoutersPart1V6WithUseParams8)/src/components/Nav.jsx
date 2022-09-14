import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <h1>Nav</h1>
        <ol>
            <Link to={`/`}><li>Home</li></Link>
            <Link to={`/seeAll`}><li>see all</li></Link>
            <Link to={`/addPerson`}><li>add</li></Link>
        </ol>
    </div>
  )
}

export default Nav