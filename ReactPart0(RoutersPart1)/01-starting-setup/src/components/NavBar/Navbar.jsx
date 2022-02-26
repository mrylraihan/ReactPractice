import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
           <h1>Navbar</h1> 
           <ul>
               <Link to={'/'}>
                   <li>Nothing</li>
                </Link>
               <Link to='home'>
               <li>Home</li>
               </Link>
               <Link to={'about'}>
               <li>About</li>
               </Link>
                <Link to={'extras'}>
               <li>Extras</li>
               </Link>
           </ul>
        </div>
    )
}

export default Navbar