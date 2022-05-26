import React, { useState } from 'react'

const defaultObj = {name:''}

const UpdatingArrays = () => {
    const [testObj, setTestObj] = useState(defaultObj)
    const [resultArray, setResultArray] = useState([])
   
    const submitHandler = ()=>{
      
        setResultArray(prev=>{
        return [...prev,{name:testObj.name}]
        })
        setTestObj(prev=> prev= defaultObj)
        
    }
    console.log(resultArray);
    return (
        <div>
            <div>TestState with Arrays</div>
            <label>Test state with an Array:
                <input type='text' value={testObj.name} onChange={e=>setTestObj(prev=>{return{...prev, name:e.target.value}})}/>
            </label>
            <button onClick={submitHandler}>set the result to the array!</button>
            <ul>
                {resultArray.map(ele=><li key={ele.name}>{ele.name}</li>)}
            </ul>
        </div>
    )
}

export default UpdatingArrays