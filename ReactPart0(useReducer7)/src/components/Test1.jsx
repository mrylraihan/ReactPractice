import React, { useReducer } from 'react'

const initial = {
    firstName:'',
    lastName:'',
    fullName:''
}
const nameReducer = (state, action)=>{
    if(action.type === 'FN'){
        return {...state, firstName: action.first}
    }else if(action.type === 'LN'){
        return {...state, lastName: action.last}
    }else if(action.type === 'FL'){
        return {...state, fullName:`${state.firstName} ${state.lastName}`}
    }else{
        return initial
    }
}
function Test1() {
    const [person, dispatch] = useReducer(nameReducer, initial)

    const getfirstName = (e)=>{
        dispatch({type:'FN', first:e.target.value})
    }
    const getlastName = (e)=>{
        dispatch({type:'LN', last:e.target.value})
    }
    const onsubmitHandler = (e)=>{
        e.preventDefault()
        dispatch({type:'FL'})
        dispatch({ type: 'FN', first: ''})
        dispatch({ type: 'LN', last: ''})

    }
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.fullName);
  return (
    <div>
          <h1>Test1</h1>
          {person.fullName && <h6>{person.fullName}</h6>}
          <form onSubmit={onsubmitHandler}>
            <div>
                <label>First Name:
                    <input type="text" value={person.firstName} onChange={getfirstName}/>
                </label>
            </div>
            <div>
                <label>Last Name:
                    <input type="text" value={person.lastName} onChange={getlastName}/>
                </label>
            </div>
            <button>submit</button>
          </form>
    </div>
  )
}

export default Test1