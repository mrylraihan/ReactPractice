import React, { useReducer } from 'react'

const reducer =(state, action)=>{
    if(action.type === "First"){
        return {...state, firstName : action.first}
    }else if(action.type === 'Last'){
        return {...state, lastName : action.last} 
    }else if(action.type === 'FullName'){
        return {...state, 
            fullName: state.firstName && state.lastName ? state.firstName + ' ' + state.lastName : state.fullName 
        }
    }
}

const FullNameReducer2 = () => {
    const [fName, dispatch] = useReducer(reducer, {
        firstName: '',
        lastName: '',
        fullName: 'Wayel Raihan'
    })
    
    const getFirstName = e =>{
        e.preventDefault()
        dispatch({ type:'First', first : e.target.value})
    }
    const getLastName = e =>{
        e.preventDefault()
        dispatch({ type:'Last', last : e.target.value})
    }
    const getFullNameHandler=(e)=>{
        e.preventDefault()
        dispatch({ type: "FullName" })
        dispatch({ type: 'firstName', first: '' })
        dispatch({ type: 'lastName', last: '' })
        console.log(fName.fullName);
    }
    return (
        <div>
            <p>{fName.fullName}</p>
            <form onSubmit={getFullNameHandler}>
                <label>FirstName: </label>
                <input type="text" value={fName.firstName} onChange={getFirstName}/>
                <label>LastName: </label>
                <input type="text" value={fName.lastName} onChange={getLastName}/>
                <button type='submit'>getFullName</button>
            </form>
        </div>
    )
}

export default FullNameReducer2