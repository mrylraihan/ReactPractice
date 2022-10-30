import React from 'react'
import { useState } from 'react'
import styles from './Login.module.css'
function Login() {
    const [userName, setUserName] = useState('')
    const [passWord, setPassword] = useState('')
    const [loginData, setLoginData] = useState('')
    const [isValid, setIsValid] = useState(true)

    const userNameChangeHandler = e=>{
        setUserName(e.target.value)
        setIsValid(true)
    }

    const passWordChangeHandler = e=>{
        setPassword(e.target.value)
        setIsValid(true)
    }
    const onSubmitHandler = e =>{
        e.preventDefault()
        if(userName.trim().length == 0 || passWord.trim().length == 0){
            setIsValid(false)
            return
        }else{
            setLoginData({
                userName, passWord
            })
        }

    }
console.log(loginData);
console.log(isValid);
  return (
      <div className={!isValid ? styles.errorStyles : ''}>
        {loginData && <h5>{loginData.userName}</h5>}
        <h3>Login</h3>
          <form onSubmit={onSubmitHandler}>
        <div>
            <label>Email : 
                <input type="text" value={userName} onChange={userNameChangeHandler}/>
            </label>
        </div>
        <div>
            <label>Password : 
                <input type="text" value={passWord} onChange={passWordChangeHandler}/>
            </label>
            <button type='submit'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Login