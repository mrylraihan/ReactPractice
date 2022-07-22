import React, { useRef } from 'react'

function LoginPage(props) {
    const userName = useRef()
    const passWord = useRef()
    const loginHandler =(e)=>{
        e.preventDefault()
        props.setUser({
            userName: userName.current.value,
            passWord: passWord.current.value
        })
        userName.current.value=''
        passWord.current.value=''
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={loginHandler}>
                <div>
                <label>
                    username:
                    <input type="text" ref={userName}/>
                </label>
                </div>
                <div>
                <label>
                    password:
                    <input type="password" ref={passWord}/>
                </label>
                </div>
                <button>submit</button>
            </form>
        </>
    )
}

export default LoginPage
