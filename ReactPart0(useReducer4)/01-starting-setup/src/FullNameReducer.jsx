import React, { useReducer } from 'react'

const fullNReducer = (state, action)=>{
    if(action.type === 'FNAME'){
        return {...state, firstName : action.first}
    }else if(action.type === 'LNAME'){
        return {...state, lastName : action.last}
    }else if(action.type === 'FULLNAME'){
        return {...state, 
            
            fullName: state.firstName && state.lastName ? state.firstName + ' ' + state.lastName : state.fullName }
    }
}

const FullNameReducer = () => {
    const [fName, dispatch] = useReducer(fullNReducer, {
        firstName:'',
        lastName:'',
        fullName: 'Wayel Raihan'
    })

    const getFirstName = (event)=>{
        event.preventDefault()
        dispatch({type:"FNAME", first : event.target.value})
    }
    const getLastName = (event)=>{
        event.preventDefault()
        dispatch({ type: "LNAME", last: event.target.value })

    }
    const getFullName = (event)=>{
        event.preventDefault()
        dispatch({ type: "FULLNAME"})
        dispatch({ type: 'FNAME', first: '' })
        dispatch({ type: 'LNAME', last: '' })



    }

    return (
        <div>
            <p>{fName.fullName}</p>
            <form onSubmit={getFullName}>
            <label htmlFor="firstName">FirstName: </label>
            <input id='firstName' type="text" value={fName.firstName} onChange={getFirstName} />
            <label htmlFor="lastName">LastName: </label>
            <input id='lastName' type="text" value={fName.lastName} onChange={getLastName} />
            <button type='submit'>Get FullName</button>
            </form>
        </div>
    )
}

export default FullNameReducer;