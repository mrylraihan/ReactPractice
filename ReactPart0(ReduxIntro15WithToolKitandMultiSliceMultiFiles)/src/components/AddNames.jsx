import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {nameActions} from '../store/name-slice'
function AddNames() {
    const dispatch = useDispatch()
    const name = useSelector(state=>state.name.name)
    const state = useSelector(state=>state)
    console.log(state);
    const getName = e =>{
        dispatch(nameActions.getName(e.target.value))
    }
    const submitName = (e)=>{
        e.preventDefault()
        dispatch(nameActions.addToList())
    }
  return (
    <div className='app'>
          <h1>AddNames</h1>
          <form onSubmit={submitName}>
            <div>
                <label> Name : 
                    <input type="text"  value={name} onChange={getName}/>
                </label>
            </div>
            <button type='submit'>add Name</button>
          </form>
    </div>
  )
}

export default AddNames