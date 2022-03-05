
import React, { useEffect, useRef, useState } from 'react'

const CounterComp = () => {
   const firstName = useRef()
   const lastName = useRef()
   const [fullName, setFullName] = useState('')
   const [submitB, setSubmit] = useState(false)
    useEffect(()=>{
        console.log('useEffect with state and useRef');
        setFullName(firstName.current.value + " " + lastName.current.value)
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
                <input type="text" ref={firstName} />
            </label>
            <label>
                Last Name:
                <input type="text" ref={lastName} />
            </label>
            <button onClick={submitHandler}>See FullName</button>
            <h4>{fullName}</h4>
        </div>
    )
}

export default CounterComp