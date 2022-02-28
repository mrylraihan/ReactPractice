import React, {useReducer} from 'react';

const reducer = (state, action)=>{
    if(action.type==="PLUS"){
        return state + 1
    }else if(action.type === "MINUS"){
        return state - 1
    }else if(action.type === 'RESET'){
        return state = 0 
    }
}

function CountOneReducerIf() {
    const [count, dispatch] = useReducer(reducer, 0)

    return ( 
        <div>
            <h2>Reducer with if</h2>
            <p>the total is {count}</p>
            <button onClick={()=>dispatch({type:'PLUS'})}>Plus 1</button>
            <button onClick={()=>dispatch({type:'MINUS'})}>Minus 1</button>
            <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
        </div>
     );
}

export default CountOneReducerIf;