import React, { useReducer } from 'react'

const initial = {
    firstName:'',
    lastName:'',
    fullName:'',
    toggle:true
}
const reducer = (state, action)=>{
    if(action.type == 'first'){
        return {...state, firstName: action.first}
    }else if(action.type == 'last'){
        return { ...state, lastName: action.last }
    }else if(action.type == 'full'){
        return { ...state, fullName: `${state.firstName} ${state.lastName}`, firstName:'', lastName:'' }
    }else if(action.type == 'toggle'){
        return {...state, toggle: !state.toggle}
    }
}
function CompUseReducer() {
    const [nameObj, dispatch] = useReducer(reducer, initial)

    const getFirstName = (e)=>{
        dispatch({type:'first',first: e.target.value})
    }
    const getLastName = (e)=>{
        dispatch({type:'last',last: e.target.value})
    }
    const getFullName = (e)=>{
        e.preventDefault()
        dispatch({type:'full'})
    }
    const toggleName = (e)=>{
        dispatch({type:'toggle'})
    }
    console.log('useReducer Obj: ', nameObj);
  return (
    <div className='app'>
          <h1>CompUseReducer</h1>
          {nameObj.toggle && <h3>{nameObj.fullName}</h3>}
          <form onSubmit={getFullName}>
            <div>
                <label>FirstName :
                    <input type="text" value={nameObj.firstName} onChange={getFirstName}/>
                </label>
            </div>
            <div>
                <label>LastName :
                    <input type="text" value={nameObj.lastName} onChange={getLastName}/>
                </label>
            </div>
            <button>Submit</button>
          </form>
          <button onClick={toggleName}>Toggle Name</button>
    </div>
  )
}

export default CompUseReducer