import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
        <Link to={'/home'}><li>Home</li></Link>
        <Link to={'/createOne'}><li>Create One</li></Link>
        <Link to={'/seeAll'}><li>See All</li></Link>
        <Link to={'/findOne'}><li>See One</li></Link>
      </ul>
    </div>
  )
}

export default Navbar