import React from 'react'
// import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'


const Navbar = () => {
// const navigate = useNavigate()
    return (
        <div>
           <h1>Navbar</h1> 
           <ul>
               {/* <li onClick={()=>navigate('/')}>Nothing</li>
               <li onClick={()=>navigate('/home')}>Home</li>
               <li onClick={()=>navigate('/about')}>About</li>
               <li onClick={()=>navigate('/extras')}>Extras</li> */}
               {/* or */}
               <Link to='/'>
                   <li>Nothing</li>
                </Link>
               <Link to='/home'>
               <li>Home</li>
               </Link>
               <Link to={'/about'}>
               <li>About</li>
               </Link>
                <Link to={'/extras'}>
               <li>Extras</li>
               </Link>

           </ul>
        </div>
    )
}

export default Navbar