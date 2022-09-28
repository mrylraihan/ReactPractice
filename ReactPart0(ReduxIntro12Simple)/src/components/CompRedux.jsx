import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CompRedux() {
    const nameObj = useSelector(state=>state)
    const dispatch = useDispatch()

    const getFirstName = (e) => {
        dispatch({ type: 'first', first: e.target.value })
    }
    const getLastName = (e) => {
        dispatch({ type: 'last', last: e.target.value })
    }
    const getFullName = (e) => {
        e.preventDefault()
        dispatch({ type: 'full' })
    }
    const toggleName = () => {
        dispatch({ type: 'toggle' })
    }
    console.log('redux object:', nameObj);
  return (
    <div className='app'>
          <h1>CompRedux</h1>
          {nameObj.toggle && <h3>{nameObj.fullName}</h3>}
          <form onSubmit={getFullName}>
              <div>
                  <label>FirstName :
                      <input type="text" value={nameObj.firstName} onChange={getFirstName} />
                  </label>
              </div>
              <div>
                  <label>LastName :
                      <input type="text" value={nameObj.lastName} onChange={getLastName} />
                  </label>
              </div>
              <button>Submit</button>
          </form>
          <button onClick={toggleName}>Toggle Name</button>
    </div>
  )
}

export default CompRedux