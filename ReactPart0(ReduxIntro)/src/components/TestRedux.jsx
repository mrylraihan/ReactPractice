import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
function TestRedux() {
    const count = useSelector(state=>state.count)
    const dispatch= useDispatch()

    const addUp = ()=>{
        dispatch({type:'add'})
    }
    const minusDown = ()=>{
        dispatch({type:'minus'})
    }
    const reset = ()=>{
        dispatch({type:''})
    }
  return (
    <div>
        <h1>{count}</h1>
        <div>
        <button onClick={reset}>reset</button>
        </div>
        <div>
        <button onClick={addUp}>plus 1</button>
        </div>
        <div>
        <button onClick={minusDown}>minus 1</button>
        </div>
    </div>
  )
}

export default TestRedux