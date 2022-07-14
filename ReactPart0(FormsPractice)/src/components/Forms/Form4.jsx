import React, { useReducer } from 'react'
const initial = {firstName:'', lastName:'', fullName:''}
const reducer = (state, action)=>{
    if(action.type === "F"){
        return {...state, firstName:action.firstName}
    }else if(action.type === "L"){
        return { ...state, lastName: action.lastName }
    } else if (action.type === "FL"){
        return { ...state, fullName: `${state.firstName} ${state.lastName}`, firstName:'', lastName:''}
    }else{
        return initial
    }
}
const Form4 = () => {
    const [name, dispatch] = useReducer(reducer, initial)

    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch({type:'FL'})
    }
    return (
        <div className='app'>
            <h3>Form #4</h3>
            <p>using useReducer</p>
            <h5>{name.fullName}</h5>
            <form onSubmit={submitHandler}>
                <div>
                    <label>first name:
                        <input type="text" value={name.firstName} onChange={e=>dispatch({type:'F', firstName:e.target.value})} />
                    </label>
                </div>
                <div>
                    <label>last name:
                        <input type="text" value={name.lastName} onChange={e => dispatch({ type: 'L', lastName: e.target.value })} />
                    </label>
                </div>
                <button type='submit'>submit name</button>
            </form>
        </div>
    )
}

export default Form4