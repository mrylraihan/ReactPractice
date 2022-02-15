import React, { useState } from 'react';

function FullNameState() {

    // const [firstName, setFName] = useState('')
    // const [lastName, setLName] = useState('')
    const [name, setFullName] = useState({
        firstName:'',
        lastName:'',
        fullName:''
    })

    const getFirstName = event =>{
        event.preventDefault()
        setFullName((prev)=>{
            return {...prev, firstName: event.target.value}})

        console.log(event.target.value, ': from getFirstName')
    }
    const getLastName = event =>{
        event.preventDefault()
        setFullName(prev=> {
            return {...prev, lastName: event.target.value}})
        console.log(event.target.value, ': from getLastName')
    }



    const ShowFullN = (e) => {
        e.preventDefault()
        // setFullName(firstName + " " + lastName)
        setFullName((prev) => {
               return  {...prev, fullName: prev.firstName +" "+prev.lastName }
        })
        console.log(name);
        setFullName(prev=>{
            return {...prev, firstName:''}
        })
        setFullName(prev=>{
            return {...prev, lastName:''}
        })
    }

    return (
        <div>
            <form onSubmit={ShowFullN}>
                <label htmlFor='fName'>First Name :
                    < input id='fName' type='text' value={name.firstName} onChange={getFirstName} />
                </label>
                <label htmlFor='lName'>Last Name :
                    < input id='lName' type='text' value={name.lastName} onChange={getLastName} />
                </label>
                <button type='submit'> print fullName</button>
            </form>
            <div>
                <h1>{name.fullName} with useState as an Object</h1>
            </div>
        </div>
    );
}

export default FullNameState;