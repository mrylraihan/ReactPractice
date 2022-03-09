import React, { useRef, useState } from 'react'

const GetFullName = () => {
    const firstName = useRef()
    const lastName = useRef()
    const [fullName , setFullName] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        setFullName(firstName.current.value + " "+ lastName.current.value)
    }

    return (
        <div>
           <form onSubmit={submitHandler}>
            <input type="text" ref={firstName} />    
            <input type="text" ref={lastName}/>
            <button type='submit'>Get full Name with Ref</button>    
            </form>
            <h1>{fullName}</h1>
           
        </div>
    )
}

export default GetFullName