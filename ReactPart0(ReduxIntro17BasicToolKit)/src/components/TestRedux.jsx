import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { simpleActions } from '../store'
function TestRedux() {
    const firstName = useSelector(state=>state.simple.firstName)
    const lastName = useSelector(state=>state.simple.lastName)
    const fullName = useSelector(state=>state.simple.fullName)
    const simple = useSelector(state=>state.simple)
    const toggle = useSelector(state=>state.simple.toggle)
    const dispatch = useDispatch()


const fNOnChange = e =>{
    dispatch(simpleActions.getFirstName({first:e.target.value}))
}

const lNOnChange = e =>{
    dispatch(simpleActions.getLastName({last:e.target.value}))
}

const onSubmitHandler = e =>{
    e.preventDefault()
    dispatch(simpleActions.getFullName())
}
console.log(simple);
  return (
      <div>
          <h4>TestRedux</h4>
          {fullName && <h5>{fullName}</h5>}
          <form onSubmit={onSubmitHandler}>
              <div>
                  <label>
                      firstName :
                      <input type="text" value={firstName} onChange={fNOnChange} />
                  </label>
              </div>
              <div>
                  <label>
                      lastName :
                      <input type="text" value={lastName} onChange={lNOnChange} />
                  </label>
              </div>
              <button type='submit'>submit</button>
          </form>

          {toggle && <h2>Toggle</h2>}
          <button onClick={()=>dispatch(simpleActions.getToggle())}>toggle btn</button>
      </div>
  )
}

export default TestRedux