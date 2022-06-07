import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action )=>{
    if(action.type === '+'){
        return state + 1
    }else if(action.type === '-'){
        return state -1
    }else{
        state = initialState
        return state 
    }
}
const ReducerCount = () => {
const [count , dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>using useReducer for count</h2>
            <p>{count}</p>
            <button onClick={()=>dispatch({type:'+'})}>+</button>
            <button onClick={() => dispatch({ type: '-' })}>-</button>
            <button onClick={() => dispatch({ type: '' })}>reset</button>
        </div>
    )
}

export default ReducerCount