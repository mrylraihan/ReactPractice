import React, { useState, useRef } from 'react';

function FullNameState() {

    const firstName = useRef()
    const lastName = useRef()
    const [FullName, setFullName] = useState('')

    const ShowFullN = (e) => {
        e.preventDefault()
        const fName= firstName.current.value
        const lName= lastName.current.value
        setFullName((prev) => {
            return prev = fName ? fName + ' ' + lName : prev
        })
        console.log(FullName);
        firstName.current.value = ''
        lastName.current.value = ''
    }

    return (
        <div>
            <form onSubmit={ShowFullN}>
                <label htmlFor='fName'>First Name :
                    < input id='fName' type='text' ref={firstName}  />
                </label>
                <label htmlFor='lName'>Last Name :
                    < input id='lName' type='text' ref={lastName}  />
                </label>
                <button type='submit'> print fullName</button>
            </form>
            <div>
                <h1>{FullName} with useRef</h1>
            </div>
        </div>
    );
}

export default FullNameState;