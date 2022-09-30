import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {nameActions, toggleActions} from '../store/index'

function CompRedux() {
    const toggleState = useSelector(state=>state.toggle)
    const nameState = useSelector(state=>state.name)
    const dispatch = useDispatch()

    const getFirstName = (e) => {
        dispatch(nameActions.getFirstName({first: e.target.value }))
    }
    const getLastName = (e) => {
        dispatch(nameActions.getLastName({last: e.target.value }))
    }
    const getFullName = (e) => {
        e.preventDefault()
        dispatch(nameActions.getFullName())
    }
    const toggleName = () => {
        dispatch(toggleActions.toggleName())
    }
    console.log('redux toggle:', toggleState);
    console.log('redux name:', nameState);
  return (
    <div className='app'>
          <h1>CompRedux Tool Kit</h1>
          {toggleState.toggle && <h3>{nameState.fullName}</h3>}
          <form onSubmit={getFullName}>
              <div>
                  <label>FirstName :
                      <input type="text" value={nameState.firstName} onChange={getFirstName} />
                  </label>
              </div>
              <div>
                  <label>LastName :
                      <input type="text" value={nameState.lastName} onChange={getLastName} />
                  </label>
              </div>
              <button>Submit</button>
          </form>
          <button onClick={toggleName}>Toggle Name</button>
    </div>
  )
}

export default CompRedux