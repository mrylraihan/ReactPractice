
import React, { useEffect, useRef, useState } from 'react'

const CounterComp = () => {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('')
    const inputRef = useRef(counter)

    useEffect(()=>{
        document.title = counter 
        inputRef.current.value = counter
        console.log('useEffect working', name);
        setName('')
        return ()=>{
            console.log('clean-up');
        }
    }, [counter])

    return (
        <div>
            <p ref={inputRef}>{inputRef.current.value}</p>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <button onClick={()=>setCounter(counter + 1)}>the counter is {counter}</button>
        </div>
    )
}

export default CounterComp