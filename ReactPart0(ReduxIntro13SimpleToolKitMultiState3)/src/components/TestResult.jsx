import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toggleAction} from '../store/index'
function TestResult() {
  const count = useSelector(state=>state.count.count)
  const toggle = useSelector(state => state.toggle.toggleCount)
  const dispatch = useDispatch()
  
  const toggleCount = ()=>dispatch(toggleAction.toggleState())
  
  console.log(toggle);
  
  return (
    <div className='app'>
      <h1>TestResult</h1>
      {toggle && <h2>{count}</h2>}
      <button onClick={toggleCount}>Toggle Count</button>
    </div>
  )
}

export default TestResult