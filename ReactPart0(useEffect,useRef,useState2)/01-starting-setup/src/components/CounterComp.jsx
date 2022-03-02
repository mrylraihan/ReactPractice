
import React, { useEffect, useRef, useState } from 'react'

const CounterComp = () => {
    const [counter, setCounter] = useState(0)
    const inputRef = useRef(counter)
    useEffect(()=>{
        document.title = counter 
        inputRef.current.value = counter
    }, [counter])
    return (
        <div>
            <p ref={inputRef}>{inputRef.current.value}</p>
            <button onClick={()=>setCounter(counter + 1)}>the counter is {counter}</button>
        </div>
    )
}

export default CounterComp