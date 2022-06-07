import React, { useReducer, useRef } from 'react'

const initial = {firstName:'', lastName:'', fullname:''}
const reducer = (state, action)=>{
    if(action.type === 'firstName'){
        return {...state, firstName: action.firstName}
    }else if(action.type === 'lastName'){
        return { ...state, lastName: action.lastName }
    }else if(action.type === 'fullname'){
        return {...state, fullname : state.firstName + ' ' + state.lastName}
    }
}

const ReducerFullName = () => {
    const [name , dispatch ] = useReducer(reducer, initial)
    const firstName = useRef()
    const lastName = useRef()
    return (
        <div>
            {name.fullname && <p>{name.fullname}</p>}
            <div>
                <label>
                    Enter first name :
                    <input type="text" ref={firstName} placeholder='first name'/>
                </label>
                <button onClick={() =>{ 
                    dispatch({ type: 'firstName', firstName: firstName.current.value})
                    firstName.current.value=''
                }}>submit first name</button>
            </div>
            <div>
                <label>
                    Enter last name :
                    <input type="text" ref={lastName} placeholder='last name'/>
                </label>
                <button onClick={() => {
                    dispatch({ type: 'lastName', lastName: lastName.current.value })
                    lastName.current.value = ''
                }}>submit last name</button>
            </div>
                <button onClick={()=>dispatch({type:'fullname'})}>Reset Name</button>
        </div>
    )
}
export default ReducerFullName