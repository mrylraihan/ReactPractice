import React, {useReducer} from 'react';


function reducerCounter(state, action){
    if(action.type === 'PLUS'){
        return state + 1
    }else if (action.type === 'MINUS') {
        return state - 1
    } else if(action.type === 'RESET'){
        return state = 0
    }

}

function CountOneReducer2() {
   const [count, dispatchCounter] = useReducer(reducerCounter, 0)

   const plusOne = ()=>{
       dispatchCounter({type: 'PLUS'})
   }
   const minusOne = ()=>{
       dispatchCounter({type: 'MINUS'})
   }
   const resetCount = ()=>{
       dispatchCounter({type: 'RESET'})
   }
    return (
    <div>
        <p>the count is now {count}</p>
        <button onClick={plusOne}> + </button>
        <button onClick={minusOne}> - </button>
        <button onClick={resetCount}>reset</button>
    </div>);
}

export default CountOneReducer2;