import { TestLiftState } from "./TestLiftState"
import React , {useState} from 'react'

const TestLiftState2=(props)=>{
    

    const checkTest = (userInput) => {
        const newUserInput = {
            ...userInput,
            id: Math.random().toString()
        }
        props.setTestLiftState(newUserInput)
        console.log('from TestLiftState2.js', newUserInput.uInput);
        props.printTestState(newUserInput)
    }
return (
    <>
        <p>{props.testState.uInput}</p>
        <TestLiftState checkTest={checkTest} />
    </>
)
}

export default TestLiftState2