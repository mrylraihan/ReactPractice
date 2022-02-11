import React, { useState } from 'react';

function CountOneStateObjects() {
    // takes 2 params first one being the reducer function 
    // the second one being the initial state 
    // const [count, setCount] = useState(0)// these arent defined yet 
    // const [userInput, setUserInput] = useState('')

    const[countAndInput , setCountAndInput]= useState({count:0, userInput: ''})

    const submitInput = ()=>{
        console.log(countAndInput);
        console.log(countAndInput.userInput)
        setCountAndInput((preV)=>{
            return {...preV, userInput: ''}
        })
    }
    return (
        <div>
            <div>
                <input value={countAndInput.userInput} onChange={(e)=>setCountAndInput(prev=>{
                   return  {...prev, userInput: prev.userInput= e.target.value}})}></input>
                <button onClick={submitInput}>click me!</button>
            </div>
            <div>Count - {countAndInput.count} With state as an Object</div>
            <button onClick={()=>setCountAndInput(prev => {
                return { ...prev, count: prev.count + 1 }
            })}>Increment</button>
            <button onClick={()=>setCountAndInput(prev => {
                return { ...prev, count: prev.count - 1 }
            })}>Decrement</button>
            <button onClick={()=>setCountAndInput(prev => {
                return { ...prev, count: prev.count = 0 }
            })}>Reset</button>
        </div>
    );
}

export default CountOneStateObjects;