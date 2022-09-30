import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {nameActions, toggleActions} from '../store/index'
function TestMultiReduxSlice() {
    const [fullName, setFullName] = useState('')
    const name = useSelector(state=>state.name)
    const toggle = useSelector(state=>state.toggle.toggle)
    const dispatch = useDispatch()

    const getFirstName = (e)=>{
        dispatch(nameActions.getFirstName({first:e.target.value}))
    }
    const getLastName = (e)=>{
        dispatch(nameActions.getLastName({last:e.target.value}))
    }
    const submitHandler = e =>{
        e.preventDefault()
        setFullName(`${name.firstName} ${name.lastName}`)
        dispatch(nameActions.getLastName({ last:''}))
        dispatch(nameActions.getFirstName({ first:''}))
    }
    const setToggle=()=>{
        dispatch(toggleActions.getToggle())
    }
    console.log(name);
    console.log(toggle);
  return (
    <div>
          {toggle  && <h1>TestMultiReduxSlice</h1>}
          {fullName && <h3>{fullName}</h3>}
          <form onSubmit={submitHandler}>
            <div>
                <label> first Name :
                    <input type="text" value={name.firstName} onChange={getFirstName}/>
                </label>
            </div>
            <div>
                <label> first Name :
                    <input type="text" value={name.lastName} onChange={getLastName}/>
                </label>
            </div>
            <button type='submit'>submit</button>
          </form>
          <button onClick={setToggle}>Toggle Header</button>
    </div>
  )
}

export default TestMultiReduxSlice