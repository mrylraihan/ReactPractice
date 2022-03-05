
import React, { useEffect, useState } from 'react'

const FullName = () => {
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [fullName, setFullName] = useState('')
   const [submitB, setSubmit] = useState(false)
    useEffect(()=>{
        console.log('useEffect with state only');
        setFullName(firstName + " " + lastName)
        return ()=>{
            console.log('clean-up');
        }
    // }, [submitB, firstName, lastName])
    }, [submitB])
    const submitHandler=()=>{
        console.log(submitB);
        setSubmit(!submitB?true:false)
    }
    return (
        <div>
            <label>
                First Name:
                <input type="text" onChange={(e)=>{setFirstName(e.target.value)}}value={firstName} />
            </label>
            <label>
                Last Name:
                <input type="text" onChange={(e)=>{setLastName(e.target.value)}}value={lastName} />
            </label>
            <button onClick={submitHandler}>See FullName</button>
            <h4>{fullName}</h4>
        </div>
    )
}

export default FullName