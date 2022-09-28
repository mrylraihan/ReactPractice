import React, { useState } from 'react'
const initial = {
    firstName: '',
    lastName: '',
    fullName: '',
    toggle: true
}
function CompUseState() {
    const [nameObj, setNameObj] = useState(initial)
    const getFirstName=(e)=>{
        setNameObj(prev=>{
            return {...prev, firstName: e.target.value}
        })
    }
    const getLastName=(e)=>{
        setNameObj(prev=>{
            return { ...prev, lastName: e.target.value }
        })
    }
    const getFullName=(e)=>{
        e.preventDefault()
        setNameObj(prev => {
            return { ...prev, fullName: `${prev.firstName} ${prev.lastName}`, firstName: '', lastName: '' }
        })
    }
    const toggleName=()=>{
        setNameObj(prev=>{
            return {...prev, toggle:!prev.toggle}
        })
    }
    console.log(nameObj);
  return (
    <div className='app'>
          <h1>CompUseState</h1>
          {nameObj.toggle && <h3>{nameObj.fullName}</h3>}
          <form onSubmit={getFullName}>
              <div>
                  <label>FirstName :
                      <input type="text" value={nameObj.firstName} onChange={getFirstName} />
                  </label>
              </div>
              <div>
                  <label>LastName :
                      <input type="text" value={nameObj.lastName} onChange={getLastName} />
                  </label>
              </div>
              <button>Submit</button>
          </form>
          <button onClick={toggleName}>Toggle Name</button>
    </div>
  )
}

export default CompUseState