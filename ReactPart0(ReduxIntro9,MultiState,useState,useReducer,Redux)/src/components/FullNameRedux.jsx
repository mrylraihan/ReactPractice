import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
function FullNameRedux() {
  const firstName = useSelector(state=>state.firstName)
  const lastName = useSelector(state=>state.lastName)
  const fullName = useSelector(state=>state.fullName)
  const state = useSelector(state=>state)
  const dispatch = useDispatch()

  const getFirstName = (e) => {
    dispatch({ type: 'fname', fname: e.target.value })
  }
  const getLastName = (e) => {
    dispatch({ type: 'lname', lname: e.target.value })
  }

  const getFullName = (e) => {
    e.preventDefault()
    dispatch({ type: 'full' })
  }
  console.log(state, 'from Redux');
  return (
    <div className='app'>
      <h1>FullName with Redux</h1>
      {fullName && <h3>{fullName}</h3>}
      <form onSubmit={getFullName}>
        <div>
          <label>
            <input type="text" value={firstName} onChange={getFirstName} />
          </label>
        </div>
        <div>
          <label>
            <input type="text" value={lastName} onChange={getLastName} />
          </label>
        </div>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default FullNameRedux