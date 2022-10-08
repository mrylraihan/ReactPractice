import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleActions} from '../store/toggle-slice'
import {nameActions} from '../store/name-slice'
function NameComp() {
    const name = useSelector(state=>state.name)
    const toggle = useSelector(state=> state.toggle.toggle)
    const state = useSelector(state=> state)
    const dispatch = useDispatch()
    console.log(state);
    const getFirst = (e)=>{
        dispatch(nameActions.getFirstName({first:e.target.value}))
    }
    const getLast = (e)=>{
        dispatch(nameActions.getLastName({ last: e.target.value }))
    }
    const getFull = (e)=>{
        e.preventDefault()
        dispatch(nameActions.getFullName())
    }
    const getToggle =()=>{
        dispatch(toggleActions.getToggle())
    }
    console.log(name);
    console.log(toggle);
  return (
    <div className='app'>
          <h4>NameComp</h4>
          <p>testing basic redux</p>
            {toggle && <h3>{name.fullName}</h3>}
          <form onSubmit={getFull}>
            <div>
                <label>
                    <input type="text" value={name.firstName} onChange={getFirst}/>
                </label>
            </div>
            <div>
                <label>
                    <input type="text" value={name.lastName} onChange={getLast}/>
                </label>
            </div>
            <button type='submit'>submit</button>
          </form>

          <button onClick={getToggle}>toggle</button>
    </div>
  )
}

export default NameComp