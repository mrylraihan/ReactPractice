import React, { useReducer } from 'react'

const initial ={
    firstName:'',
    lastName:'',
    fullName:''
}

const reducer = (state, action)=>{
    if(action.type =='first'){
        return{...state, firstName: action.first}
    }else if(action.type == 'last'){
        return { ...state, lastName: action.last }
    }else if(action.type == 'full'){
        return { ...state, fullName: `${state.firstName} ${state.lastName}`, firstName:'',lastName:''}
    }
    return initial
}

function FullNameUseReducer() {

    const [fullName, dispatch] = useReducer(reducer, initial)

    console.log(fullName, 'useReducer');
    const setFirstName = e =>{
        dispatch({type:'first', first: e.target.value})
    }

    const setLastName = e =>{
        dispatch({type:'last', last: e.target.value})
    }

    const onSubmitHandler = e =>{
        e.preventDefault()
        dispatch({type:'full'})
    }
    return (
        <div>
            <h1>FullNameUseReducer</h1>

            {fullName.fullName && <h3>{fullName.fullName}</h3>}
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>First Name:
                        <input type="text" value={fullName.firstName} onChange={setFirstName} />
                    </label>
                </div>
                <div>
                    <label>Last Name:
                        <input type="text" value={fullName.lastName} onChange={setLastName} />
                    </label>
                </div>
                <button>Submit Name</button>
            </form>
        </div>
    )
}

export default FullNameUseReducer