import { LowestLevel } from "./LowestLevel"
import React from 'react'

const TestLiftState=(props)=>{
    

    const checkTest = (userInput) => {
        const newUserInput = {
            ...userInput,
            id: Math.random().toString()
        }
        console.log('from TestLiftState.js', newUserInput.uInput);
        props.printTestState(newUserInput)
    }
return (
    <>
        <h1>{props.testState.uInput}</h1>
        <LowestLevel checkTest={checkTest} />
    </>
)
}

export default TestLiftState