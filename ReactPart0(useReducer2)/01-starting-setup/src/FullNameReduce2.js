import React, { useReducer } from 'react';


const makeFullName = (state, action)=>{
    switch(action.type){
        case 'FIRSTNAME':
            return { ...state, firstName: action.first }
        case 'LASTNAME':
            return { ...state, lastName: action.last}
        case 'FULLNAME':
            return {...state, fullName: state.firstName + ' '+ state.lastName}
        default:
            return state
    }
}

const FullNameReducer2 = ()=>{

    const [fullState, dispatch] = useReducer(makeFullName, {
        firstName: '',
        lastName: '',
        fullName: ''
    })
    const getFirstName = event => {
        event.preventDefault()
        dispatch({ type: 'FIRSTNAME', first: event.target.value })
        console.log(event.target.value, ': from getFirstName')
    }
    const getLastName = event => {
        event.preventDefault()
        dispatch({ type: 'LASTNAME', last: event.target.value })
        console.log(event.target.value, ': from getLastName')
    }
    const ShowFullN = (e) => {
        e.preventDefault()
        // setFullName(firstName + " " + lastName)
        dispatch({ type: 'FULLNAME' })
        console.log(fullState.fullName);
        console.log(fullState.firstName);
        console.log(fullState.lastName);
        dispatch({ type: 'FIRSTNAME', first: '' })
        dispatch({ type: 'LASTNAME', last: '' })
    }

    return (
        <div>
            <form onSubmit={ShowFullN}>
                <label htmlFor='fName'>First Name :
                    < input id='fName' type='text' value={fullState.firstName} onChange={getFirstName} />
                </label>
                <label htmlFor='lName'>Last Name :
                    < input id='lName' type='text' value={fullState.lastName} onChange={getLastName} />
                </label>
                <button type='submit'> print fullName</button>
            </form>
            <div>
                <h1>{fullState.fullName}  With Reducer and Switch</h1>
            </div>
        </div>
    )

}

export default FullNameReducer2