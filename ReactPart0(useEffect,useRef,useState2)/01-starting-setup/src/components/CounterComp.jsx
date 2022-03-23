
import React, { useEffect, useRef, useState } from 'react'

const CounterComp = () => {
    const [counter, setCounter] = useState(0)
    const inputRef = useRef(counter)
    useEffect(()=>{
        document.title = counter 
        inputRef.current.value = counter
    },[counter])
    return (
        <div>
            <p ref={inputRef}>{inputRef.current.value}, {counter}</p>
            <button onClick={()=>{
                inputRef.current.value = inputRef.current.value + 1
                setCounter(inputRef.current.value)}}>the counter is {counter}</button>
        </div>
    )
}

export default CounterComp