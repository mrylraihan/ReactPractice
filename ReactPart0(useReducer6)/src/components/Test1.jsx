import React, { useReducer } from 'react'

const initial = {
    firstName: '',
    lastName: '',
    fullName: ''
}

const reducerFN = (state, action)=>{
    if(action.type === 'FN'){
        return {...state, firstName: action.first }
    }else if(action.type === "LN"){
        return { ...state, lastName: action.last}
    } else if (action.type === "FL"){
        return {...state, fullName: `${state.firstName} ${state.lastName}` }
    }
}

function Test1() {

    const [user, dispatch] = useReducer(reducerFN, initial)
    
    const getFirstName = (e)=>{
        dispatch({type: 'FN', first:e.target.value})
    }
    const getLastName = (e)=>{
        dispatch({type: 'LN', last:e.target.value})
    }
    const getFullName = (e)=>{
        e.preventDefault()
        dispatch({type: 'FL'})
        dispatch({ type: 'FN', first: '' })
        dispatch({ type: 'LN', last: '' })
    }

  return (
    <div>
        <h1>Test 1!</h1>
       {user.fullName && <h3>{user.fullName}</h3>}
        <form onSubmit={getFullName}>
            <div>
                <label>first name:
                      <input type="text" value={user.firstName} onChange={getFirstName} />
                </label>
            </div>
            <div>
                <label>last name:
                      <input type="text" value={user.lastName} onChange={getLastName} />
                </label>
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Test1