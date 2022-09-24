import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {nameActions} from '../reduxStore/index'
function FullNameRedux() {
  const firstName = useSelector(state=>state.firstName)
  const lastName = useSelector(state=>state.lastName)
  const fullName = useSelector(state=>state.fullName)
  const toggle = useSelector(state=>state.toggleName)
  const state = useSelector(state=>state)
  const dispatch = useDispatch()

  const getFirstName = (e) => {
    dispatch(nameActions.getFirstName({fn: e.target.value}))
  }
  const getLastName = (e) => {
    dispatch(nameActions.getLastName({ln: e.target.value }))
  }

  const getFullName = (e) => {
    e.preventDefault()
    dispatch(nameActions.getFullName())
  }
  const toggleName = ()=>{
    dispatch(nameActions.toggleFeature())
  }
  console.log(state, 'from Redux');
  return (
    <div className='app'>
      {toggle&& <h1>FullName with Redux</h1>}
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
      <button onClick={toggleName}>toggle name</button>
    </div>
  )
}

export default FullNameRedux