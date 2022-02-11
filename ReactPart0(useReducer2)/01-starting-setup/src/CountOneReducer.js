import React, { useReducer } from 'react';

const initialState = 0
const reducer = (state, action) => {
    // returns one value which is the new state 
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CountOneReducer() {
    // takes 2 params first one being the reducer function 
    // the second one being the initial state 
    const [count, dispatch] = useReducer(reducer, initialState)// these arent defined yet 
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    );
}

export default CountOneReducer;