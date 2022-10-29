import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

function Login(props) {
    const [inputData, setInputData] = useState({})
    const [error, setError] = useState('')
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')

    useEffect(()=>{
        const loginData = {userName:'mr.ylraihan', passWord:'gundam'} 
        if(inputData.userName){

            if(inputData.userName == loginData.userName && inputData.passWord == loginData.passWord){
                props.setUser(inputData)
            }else{
                setError('something went wrong try again')
            }
        }
    }, [inputData])

    const userOnchange = e =>{
        setUserName(e.target.value)
        setError('')
    }
    const passOnchange = e =>{
        setPassWord(e.target.value)
        setError('')
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        setInputData({
            userName: userName,
            passWord: passWord
        })
       setPassWord('')
       setUserName('')
    }
  return (
    <div className='app'>
          <h3>Login</h3>
          {error && <p>{error}</p>}
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>
                    <input type="text" value={userName} onChange={userOnchange}/>
                </label>
            </div>
            <div>
                <label>
                    <input type="text" value={passWord} onChange={passOnchange}/>
                </label>
            </div>
            <button type='submit'>login</button>
          </form>
    </div>
  )
}

export default Login