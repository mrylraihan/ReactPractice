import React, { useRef, useState } from 'react'
import Button from '../UI/Button/Button'
const TestUseRef = () => {
    const fName = useRef()
    const lName = useRef()
    const [fullName, setFullName] = useState('')
    const onSubmitHandler= ()=>{
        let fn = fName.current.value
        let ln = lName.current.value
        console.log(fn, ln)
        // setting state to new values if they are truthy, 
        // if they are falsy then use old values 
        setFullName(prev=> fn&&ln?`${fn} Nageeb ${ln}`: prev)
        fName.current.value =''
        lName.current.value =''
    }
    return (

        <div className='app'>
            <p>{fullName}</p>
            <div>
                <label htmlFor="fname">
                    first name:
                    <input id='fname' type='text' placeholder='type in first name' ref={fName} />
                </label>
            </div>
            <div>

                <label htmlFor="lname">
                    last name:
                    <input id='lname' type='text' placeholder='type in last name' ref={lName} />
                </label>
            </div>
            <Button onClick={onSubmitHandler}>Submit</Button>
        </div>
    )
}

export default TestUseRef