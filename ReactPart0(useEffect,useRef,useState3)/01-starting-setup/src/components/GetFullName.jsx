import React, { useState } from 'react'

const GetFullName = () => {
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [fullName , setFullName] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        setFullName(firstName + " "+ lastName)
    }

    return (
        <div>
           
            <input type="text" onChange={(e)=>{setFirstName(e.target.value)}}/>    
            <input type="text" onChange={(e) =>{setLastName(e.target.value)}}/>
            <button type='button' onClick={submitHandler}>Get full Name</button>    
           
            <h1>{fullName}</h1>
        </div>
    )
}

export default GetFullName