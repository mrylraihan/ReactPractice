import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {nameActions} from '../store/index'

function TestRedux() {
  const state = useSelector(state=>state.nameSlice)
  const dispatch = useDispatch()
  console.log(state);

  const getFirstName = e =>{
    dispatch(nameActions.getFirstName({first:e.target.value}))
  }
  const getLastName = e =>{
    dispatch(nameActions.getLastName({last:e.target.value}))
  }
  const onSubmitHandler = e =>{
    e.preventDefault()
    dispatch(nameActions.getFullName())
  }
  return (
    <div className='app'>
          <h3>TestRedux</h3>
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>First Name :
                    <input type="text" value={state.firstName} onChange={getFirstName}/>
                </label>
            </div>
            <div>
                <label>First Name :
            <input type="text" value={state.lastName} onChange={getLastName}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default TestRedux