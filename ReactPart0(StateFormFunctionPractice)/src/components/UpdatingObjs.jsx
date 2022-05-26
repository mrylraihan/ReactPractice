import React, { useState } from 'react'

const UpdatingObjs = () => {
    const [testString , setTestString] = useState('')
    const [resultObj , setResultObj] = useState({name:''})
    const submitHandler = ()=>{
        // setResultObj({name:testString})
        // setTestString('')
        // the form function way 
        setResultObj(prev=>{
            return {...prev, name:testString} //this will copy all the latest
            // previous state and override any key that is name
        })
        setTestString(prev=>{
            return prev = ''
        })
    }
    console.log(resultObj);
    
    return (
        <div>
            <label>
                Test updating this Strings State:
                <input type="text" value={testString} onChange={(e)=>{setTestString(e.target.value)}}/>
            </label>
            <button onClick={submitHandler}>test the state of the string!</button>
            <p>{resultObj.name}</p>
        </div>
    )
}

export default UpdatingObjs