import React, { useState } from 'react'

const UpdatingBoolean = () => {
    
    const [resultBoolean , setResultBoolean] = useState(false)
    const submitHandler = ()=>{
        // setResultString(!resultBoolean)
        // the form function way
        
        setResultBoolean(prev=>prev = !resultBoolean)
    }
    console.log(resultBoolean);
    return (
        <div>
            <label>
                Test updating this Booleans State:
            <button onClick={submitHandler}>Toggle True or False</button>
            </label>
            <p>{resultBoolean.toString()}</p>
        </div>
    )
}

export default UpdatingBoolean