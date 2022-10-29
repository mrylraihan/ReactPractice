import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {loginActions} from '../store/index'

function Home() {
    const dispatch = useDispatch()
    const state = useSelector(state=>state)
    const logOutHandler = ()=>{
        dispatch(loginActions.getInitial())
    }
    console.log(state);
    return (
    <div className='app'>
          <h3>Home</h3>
          <button onClick={logOutHandler}>log out</button>
    </div>
  )
}

export default Home