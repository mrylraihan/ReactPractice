import React from 'react'
import { useState } from 'react'
import useInput from '../hooks/use-input'

function Form() {
    const [fullName, setFullName] = useState('')
    const [fName, fOnChange, fReset] = useInput()
    const [lName, lOnChange, lReset] = useInput()

    const submitHandler = (e)=>{
        e.preventDefault()
        setFullName(prev=>prev = fName +' '+lName)
        fReset()
        lReset()
    }
  return (
    <div>
        <h1>Test Custom Hook input</h1>
        {fullName && <h3>{fullName}</h3>}
         <form onSubmit={submitHandler}>
            <div>
                <label> firstname: 
                    <input type="text" value={fName} onChange={fOnChange}/>
                </label>
            </div>
            <div>
                <label> lastname: 
                    <input type="text" value={lName} onChange={lOnChange} />
                </label>
            </div>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Form