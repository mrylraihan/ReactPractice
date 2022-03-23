
import React, { useEffect, useRef, useState } from 'react'
import DisplayComp from './DisplayComp'

const CounterComp = () => {
    const [counter, setCounter] = useState(0)
    const inputRef = useRef(counter)
    useEffect(()=>{
        document.title = counter 
        inputRef.current.value = counter
    }, [counter])
    return (
        <div>
            <DisplayComp ref={inputRef} onClick={()=>{
                inputRef.current.value = inputRef.current.value + 1
                setCounter(inputRef.current.value)}} counter={counter}> the counter is # </DisplayComp>
        </div>
    )
}

export default CounterComp