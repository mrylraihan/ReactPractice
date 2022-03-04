
import React, { useEffect, useReducer } from 'react'

const reducer = (state, action)=>{
    if(action==="ADD"){
        return {count: state.count + 1, isValid: state.count + 1 > 5}
    }
    if(action==='SUBTRACT'){
        return { count: state.count - 1, isValid: state.count - 1 > 5 }
    }
    return {
        isValid: state.isValid, count: state.count
    }
}

const CounterComp = () => {
    const [counter, countDispatch] = useReducer( reducer, 
        { isValid: false, count: 0 }
        )
    
    const {isValid} = counter
    useEffect(()=>{
        console.log('useEffect is running');
        console.log(counter);
    }, [isValid])
    
    const countUp=()=>{
      countDispatch("ADD")
    }

    const countDown=()=>{
      countDispatch('SUBTRACT')
    }

    

    return (
        <div>
            <button onClick={countDown}>minus 1</button>
           <p>{counter.count}</p>
            <button onClick={countUp}>add 1</button>
        </div>
    )
}

export default CounterComp