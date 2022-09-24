import React from 'react'
import { useReducer } from 'react'

const initial = {
    firstName:'',
    lastName:'',
    fullName:''
}

const reducer = (state, action)=>{
    if(action.type == 'fname'){
        return {...state, firstName: action.fname}
    } else if (action.type == 'lname'){
        return {...state, lastName: action.lname}
    } else if (action.type == 'full'){
        return { ...state, fullName: state.firstName && state.lastName ? `${state.firstName} ${state.lastName}`: state.fullName, firstName:'', lastName:''}
    }else{
        return initial
    }
}

function FullNameUseReducer() {
    const [names , dispatch] = useReducer(reducer, initial)

    const getFirstName = (e)=>{
        dispatch({ type:'fname', fname:e.target.value})
    }
    const getLastName = (e)=>{
        dispatch({type:'lname', lname:e.target.value})
    }

    const getFullName = (e)=>{
        e.preventDefault()
        dispatch({type:'full'})
    }
    console.log(names, 'from useReducer');
  return (
    <div className='app'>
          <h1>FullName with useReducer</h1>
          {names.fullName && <h3>{names.fullName}</h3>}
          <form onSubmit={getFullName}>
              <div>
                  <label>
                      <input type="text" value={names.firstName} onChange={getFirstName} />
                  </label>
              </div>
              <div>
                  <label>
                      <input type="text" value={names.lastName} onChange={getLastName} />
                  </label>
              </div>
              <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default FullNameUseReducer