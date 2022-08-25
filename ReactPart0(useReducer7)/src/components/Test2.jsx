import React, { useReducer } from 'react'
import { useRef } from 'react'

const initial = {
    firstName: '',
    lastName: '',
    fullName: ''
}
const nameReducer = (state, action) => {
    if (action.type === 'FN') {
        return { ...state, firstName: action.first }
    } else if (action.type === 'LN') {
        return { ...state, lastName: action.last }
    } else if (action.type === 'FL') {
        return { ...state, fullName: state.firstName?`${state.firstName} ${state.lastName}`: state.fullName }
    } else {
        return initial
    }
}
function Test2() {
    const [person, dispatch] = useReducer(nameReducer, initial)
    const firstNameRef = useRef()
    const lastNameRef = useRef()

    const onsubmitHandler = (e) => {
        e.preventDefault()
        dispatch({ type: 'FN', first: firstNameRef.current.value })
        dispatch({ type: 'LN', last: lastNameRef.current.value })
        dispatch({ type: 'FL' })
        firstNameRef.current.value = ''
        lastNameRef.current.value = ''

    }
    const resetHandler = ()=>{
        dispatch({type:''})
    }

    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.fullName);

    return (
        <div>
            <h1>Test2</h1>
            {person.fullName && <h6>{person.fullName}</h6>}
            <form onSubmit={onsubmitHandler}>
                <div>
                    <label>First Name:
                        <input type="text"  ref={firstNameRef}/>
                    </label>
                </div>
                <div>
                    <label>Last Name:
                        <input type="text" ref={lastNameRef} />
                    </label>
                </div>
                <button>submit</button>
            </form>
            <button onClick={resetHandler}>reset</button>
        </div>
    )
}

export default Test2