import React, { useState } from 'react'

function FullNameUseState() {
    const [fullName, setFullName]= useState({
        firstName:'',
        lastName:'',
        fullName: ''
    })
    console.log(fullName, 'useState');

    const setFirstName = e=>{
        setFullName(prev=>{
            return{...prev, firstName: e.target.value}
        })
    }

    const setLastName = e=>{
        setFullName(prev=>{
            return{...prev, lastName: e.target.value}
        })
    }
    const onSubmitHandler = e =>{
        e.preventDefault()
        setFullName(prev=>{
            return {...prev, fullName: `${prev.firstName} ${prev.lastName}`, lastName:'', firstName:''}
        })
    }

  return (
    <div>
          <h1>FullName with UseState</h1>
          {fullName.fullName && <h3>{fullName.fullName}</h3>}
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>First Name:
                    <input type="text" value={fullName.firstName} onChange={setFirstName}/>
                </label>
            </div>
            <div>
                <label>Last Name:
                    <input type="text" value={fullName.lastName} onChange={setLastName}/>
                </label>
            </div>
            <button>Submit Name</button>
          </form>
    </div>
  )
}

export default FullNameUseState