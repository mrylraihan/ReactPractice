import React, { useState } from 'react'
import { useRef } from 'react'

function Login(props) {
    const [hasError, setError] = useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()


    const onSubmitHandler = (e) =>{
        e.preventDefault()
        
        const email = emailRef.current.value
        const password = passwordRef.current.value
        if(email.includes('@')){
            props.onLogin(email,password)
            emailRef.current.value = ''
            passwordRef.current.value = ''
            setError(false)
        }else{
            setError(true)
        }
    }

    return (
        <div>
        <h1>Login</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>email:
                        <input type="text" ref={emailRef} />
                    </label>
                </div>
                <div>
                    <label>password:
                        <input type="password" ref={passwordRef} />
                    </label>
                </div>
                <button type='submit'>Submit</button>
            </form>
            {hasError && <p>Theres an Error try again!</p>}
        </div>
    )
}

export default Login
