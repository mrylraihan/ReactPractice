import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
// import Home from './Home'

const SignUp = (props) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
  
   

    const submitHandler = (e)=>{
        e.preventDefault()
        if(password === confirmPassword){
            props.getUser(prev=>{
                return {...prev, email:email, name:name, password:password}
            })
            props.setIsTrue(true)
            
        }else{
            alert('please try again! incorrect password and confirmation dont match')
        }
        setEmail('')
        setName('')
        setPassword('')
        setConfirmPassword('')
    }
    if (props.isTrue){
        return <Redirect to='/Home'/>
      
    }
    return ( 
        <div>
           
            <form onSubmit={submitHandler}>
                <div>
                <label htmlFor="email">Email :</label>
                <input id='email' name='email' type="email" value={email} onChange={(e=>setEmail(e.target.value))} required />
                </div>
                <div>
                <label htmlFor="name">Name :</label>
                <input id='name' name='name' type="name" value={name} onChange={(e=>setName(e.target.value))} required />
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                <input id='password' name='password' type="password" value={password} onChange={(e=>setPassword(e.target.value))} required />
                </div>
                <div>

                <label htmlFor="confirmPassword">confirmPassword:</label>
                <input id='confirmPassword' name='confirmPassword' type="password" value={confirmPassword} onChange={(e=>setConfirmPassword(e.target.value))} required />
                </div>
                <button type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default SignUp