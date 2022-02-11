import React, { useState } from 'react';

function CountOneState() {
    // takes 2 params first one being the reducer function 
    // the second one being the initial state 
    const [count, setCount] = useState(0)// these arent defined yet 
    const [userInput, setUserInput] = useState('')

    const submitInput = ()=>{
        console.log(userInput)
        setUserInput('')
    }
    return (
        <div>
            <div>
                <input value={userInput} onChange={(e)=>setUserInput(e.target.value)}></input>
                <button onClick={submitInput}>click me!</button>
            </div>
            <div>Count - {count} With state</div>
            <button onClick={() => setCount(prev=>{
                return prev + 1
            })}>Increment</button>
            <button onClick={() => setCount(prev => {
                return prev - 1
            })}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default CountOneState;