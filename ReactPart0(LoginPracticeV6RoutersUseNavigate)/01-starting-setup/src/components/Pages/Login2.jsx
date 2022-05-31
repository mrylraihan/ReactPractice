import React, {useRef, useState} from 'react'
import {Navigate} from 'react-router-dom'

const Login2 = (props) => {
    const userRef = useRef()
    const passwordRef = useRef()
    const [loginUser, setLoginUser] = useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()
        console.log(userRef.current.value);
        if(userRef.current.value.length < 5 ||'' && passwordRef.current.value.length < 5 || ''){
            props.setUser(false)
        }else{
            props.setUser(true)
        }
        userRef.current.value = ''
        passwordRef.current.value = ''
    }

    if(loginUser){
        return <Navigate to='/home'/>
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
                <button onClick={()=>setLoginUser(props.user)}>Go to user Homepage or non-user Homepage</button>
            </div>
        </div>
    )
}

export default Login2