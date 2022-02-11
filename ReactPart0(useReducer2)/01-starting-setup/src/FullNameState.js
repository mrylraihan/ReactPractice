import React, { useState } from 'react';

function FullNameState() {

    const [firstName, setFName] = useState('')
    const [lastName, setLName] = useState('')
    const [FullName, setFullName] = useState('')

    const getFirstName = event =>{
        event.preventDefault()
        setFName(event.target.value)
        console.log(event.target.value, ': from getFirstName')
    }
    const getLastName = event =>{
        event.preventDefault()
        setLName(event.target.value)
        console.log(event.target.value, ': from getLastName')
    }



    const ShowFullN = (e) => {
        e.preventDefault()
        // setFullName(firstName + " " + lastName)
        setFullName((prev) => {
               return  prev = firstName ? firstName+ ' '+ lastName : prev
        })
        console.log(FullName);
        setFName('')
        setLName('')
    }

    return (
        <div>
            <form onSubmit={ShowFullN}>
                <label htmlFor='fName'>First Name :
                    < input id='fName' type='text' value={firstName} onChange={getFirstName} />
                </label>
                <label htmlFor='lName'>Last Name :
                    < input id='lName' type='text' value={lastName} onChange={getLastName} />
                </label>
                <button type='submit'> print fullName</button>
            </form>
            <div>
                <h1>{FullName} with useState</h1>
            </div>
        </div>
    );
}

export default FullNameState;