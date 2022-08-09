import React from 'react'
import { useState } from 'react'
import useInput from '../hooks/use-input'

function Form() {
    const [fullName, setFullName] = useState({
        firstName:'',
        lastName:''
    })
    const [fName, fOnChange, getfullname, fReset] = useInput(setFullName, 'f')
    // we skipped getfullname because we are already getting it from the firstname getfullname
    const [lName, lOnChange, , lReset] = useInput(setFullName, 'l')

    const submitHandler = (e)=>{
        e.preventDefault()
        getfullname()
        fReset()
        lReset()
    }
  return (
    <div>
        <h1>Test Custom Hook input</h1>
        {fullName.firstName && <h3>{`${fullName.firstName} ${fullName.lastName}`}</h3>}
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