import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const userRef = useRef()
    const passwordRef = useRef()
   
    let navigate = useNavigate()
    let navigate2 = useNavigate()


    const onSubmit = (e) => {
        e.preventDefault()
        console.log(userRef.current.value);
        if (userRef.current.value.length < 5 || '' && passwordRef.current.value.length < 5 || '') {
            props.setUser(false)
        } else {
            props.setUser(true)
        }
    }
    
    const redirectHomeHandler =()=>{
       return navigate('/home')
   }
    const redirectAboutHandler =()=>{
       return navigate2('/about')
   }
    return (
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <label htmlFor='username'>UserName</label>
                    <input type="text" ref={userRef} />
                    <label htmlFor='password'>Password</label>
                    <input type="password" ref={passwordRef} />
                    <button type='submit'>submit</button>
                </form>
                <p value={props.user}>{props.user ? 'all good' : 'check yourself'}</p>
                <button onClick={redirectHomeHandler}>Go to user Homepage or nonUser Hompage</button>
                <button onClick={redirectAboutHandler}>Go to About page</button>
            </div>
        </div>
    )
}

export default Login