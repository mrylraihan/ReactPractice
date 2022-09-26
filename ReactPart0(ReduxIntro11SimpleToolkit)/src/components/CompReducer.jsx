import React, { useReducer } from 'react'


const initial = {
    firstName: '',
    lastName: '',
    fullName: '',
    toggleName: true
}

const reducer = (state, action) => {
    if (action.type == 'first') {
        return { ...state, firstName: action.first }
    } else if (action.type == 'last') {
        return { ...state, lastName: action.last }
    } else if (action.type == 'full') {
        return { ...state, fullName: `${state.firstName} ${state.lastName}` }
    } else if (action.type == 'toggle') {
        return { ...state, toggleName: !state.toggleName }
    } else {
        return initial
    }
}
function CompReducer() {
    const [nameRObj , dispatch] = useReducer(reducer, initial)
    const getFirstName = (e)=>{
        dispatch({type:'first', first:e.target.value})
    }
    const getLastName = (e)=>{
        dispatch({ type: 'last', last: e.target.value })
    }
    const getFullName = (e)=>{
        e.preventDefault()
        dispatch({ type: 'full'})
    }
    const toggle = ()=>{
        dispatch({type:'toggle'})
    }

  return (
    <div className='app'>
          <h1>CompReducer</h1>
          {nameRObj.toggleName && <h3>{nameRObj.fullName}</h3>}
          <form onSubmit={getFullName}>
            <div>
                <label>firstName :
                    <input type="text" value={nameRObj.firstName} onChange={getFirstName}/>
                </label>
            </div>
            <div>
                <label>lastName :
                    <input type="text" value={nameRObj.lastName} onChange={getLastName}/>
                </label>
            </div>
            <button>Submit</button>
          </form>
          <button onClick={toggle}>toggle name</button>
    </div>
  )
}

export default CompReducer