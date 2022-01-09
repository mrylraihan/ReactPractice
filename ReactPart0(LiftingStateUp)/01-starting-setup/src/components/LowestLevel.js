import React, { useState } from 'react'

export const LowestLevel = (props)=>{

    const [userInput, setUserInput] = useState('')

    const getTest = (event)=>{
        setUserInput(event.target.value)
    
        
    }
    const submitHandler = (event) =>{
        event.preventDefault()
        console.log('from test',userInput);
        const newObj = {
            uInput:userInput
        }
        props.checkTest(newObj)
        setUserInput('')
    }

    return(
    <div>
    <label>Test</label>
        <input type='text' value={userInput} onChange={getTest}></input>
    <button onClick={submitHandler}>LiftState</button>
    </div>

    )
}