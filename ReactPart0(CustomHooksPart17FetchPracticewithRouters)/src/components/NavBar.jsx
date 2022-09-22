import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div>
          <h4>NavBar</h4>
          <ul>
            <Link to='/k'><li>KanyeQuote</li></Link>
            <Link to='/j'><li>jsonPlaceH</li></Link>
            <Link to='/'><li>Home</li></Link>
          </ul>
    </div>
  )
}

export default NavBar