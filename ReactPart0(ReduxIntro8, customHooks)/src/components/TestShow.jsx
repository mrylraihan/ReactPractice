import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function TestShow() {
    const show = useSelector(state=>state.show)
    const dispatch = useDispatch()
    const toggle = ()=>{
        dispatch({type:'show'})
    }
  return (
    <div>
          {show &&<h1>TestShow</h1>}
          <button onClick={toggle}>Testing the show state</button>
    </div>
  )
}

export default TestShow