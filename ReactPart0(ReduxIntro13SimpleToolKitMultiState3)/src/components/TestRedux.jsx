import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {countActions} from '../store/index'
function TestRedux() {
    const numRef = useRef()
    const dispatch = useDispatch()
    const count = useSelector(state=>state.count)
    console.log(count);
    const sumUp = () =>{
        dispatch(countActions.sumUp())
    }
    const sumDown = () =>{
        dispatch(countActions.sumDown())
    }
    const sumInput = ()=>{
        dispatch(countActions.sumInput(+numRef.current.value))
        numRef.current.value = ''
    }
  return (
    <div className='app'>
          <h1>TestRedux</h1>

        <div>
            <label>
                <input type="number" ref={numRef}/>
            </label>
            <button onClick={sumInput}>Submit input</button>
        </div>
        <button onClick={sumUp}>Increase</button>
        <button onClick={sumDown}>Decrease</button>
    </div>
  )
}

export default TestRedux