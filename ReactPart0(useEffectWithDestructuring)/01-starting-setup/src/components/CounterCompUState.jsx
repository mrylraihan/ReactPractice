
import React, { useEffect, useState } from 'react'

const CounterComp = () => {
    const [counter, setCounter] = useState({isValid:false, count:0})
    
    const {isValid} = counter
    useEffect(()=>{
        console.log('useEffect is running');
    },[isValid])
    
    const countUp=()=>{
       setCounter(prev=>{
           return { ...prev, count: prev.count + 1, isValid: prev.count + 1 >= 5}
       })
    }

    const countDown=()=>{
       setCounter(prev=>{
           return { ...prev, count: prev.count - 1, isValid: prev.count - 1 >= 5}
       })
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