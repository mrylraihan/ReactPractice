import React, { useState } from 'react'

const UpdatingStrings = () => {
    const [testString , setTestString] = useState('')
    const [resultString , setResultString] = useState('')
    const submitHandler = ()=>{
        // setResultString(testString)
        // setTestString('')
        // the form function way 
        setResultString(prev=>prev = testString)
        setTestString(prev=> prev = '')
    }
    console.log(resultString);
    return (
        <div>
            <label>
                Test updating this Strings State:
                <input type="text" value={testString} onChange={(e)=>{setTestString(e.target.value)}}/>
            </label>
            <button onClick={submitHandler}>test the state of the string!</button>
            <p>{resultString}</p>
        </div>
    )
}

export default UpdatingStrings