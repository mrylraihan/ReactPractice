import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginActions } from '../store'
function Login() {
    const userName = useSelector(state=>state.loginData.userName)
    const passWord = useSelector(state=>state.loginData.passWord)
    const state = useSelector(state=>state)
    const dispatch = useDispatch()

    const userOnchange = e => {
        dispatch(loginActions.getUsername({user:e.target.value}))
    }
    const passOnchange = e => {
        dispatch(loginActions.getPassword({pass:e.target.value}))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(loginActions.getLogin())
        console.log(state);
    }
    console.log(state);
  return (
      <div className='app'>
          <h3>Login</h3>
          <form onSubmit={onSubmitHandler}>
              <div>
                  <label>user-name:
                      <input type="text" value={userName} onChange={userOnchange} />
                  </label>
              </div>
              <div>
                  <label>password:
                      <input type="text" value={passWord} onChange={passOnchange} />
                  </label>
              </div>
              <button type='submit'>login</button>
          </form>
      </div>
  )
}

export default Login