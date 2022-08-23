import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
           <h1>Navbar</h1> 
           <ul>
               <Link to='/'>
                   <li>home</li>
                </Link>
                <Link to='/GetAllFetch'>
               <li>Get All With Fetch</li>
               </Link>
                <Link to='/GetAllAxios'>
               <li>Get All With Axios</li>
               </Link>
                <Link to='/GetOneByID'>
               <li>Get One By Id</li>
               </Link>
                <Link to='/CreatePostAxios'>
               <li>Create a Post with axios</li>
               </Link>
                <Link to='/CreatePost'>
               <li>Create a Post</li>
               </Link>
              
           </ul>
        </div>
    )
}

export default Navbar