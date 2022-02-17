import React, { useContext, useRef } from 'react'
import NameContext from '../store/name-context'

export const LowestLevel = (props) => {

    const userInput = useRef()
    const nameCtx = useContext(NameContext)
 
    const submitHandler = (event) => {
        event.preventDefault()
        console.log('from test', userInput.current.value);
        const newObj = {
            uInput: userInput.current.value
        }
        props.checkTest(newObj)
        userInput.current.value = ''
    }

    return (
        <>
            <div>
                <label>Test</label>
                <input type='text' ref={userInput}></input>
                <button onClick={submitHandler}>LiftState</button>
            </div>
            <h2>{nameCtx.name}</h2>
        </>

    )
}