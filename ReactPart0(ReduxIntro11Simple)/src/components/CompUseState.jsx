import React, { useState } from 'react'

function CompUseState() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')
    const [toggle, setToggle] = useState(true)

    const getFirstName = (e)=>{
        setFirstName(e.target.value)
    }
    const getLastName = (e)=>{
        setLastName(e.target.value)
    }
    const getFullName = (e)=>{
        e.preventDefault()
        setFullName(`${firstName} ${lastName}`)
        setFirstName('')
        setLastName('')
    }
    const toggleFn = ()=>{
        setToggle(!toggle)
    }
    console.log('firstname: ', firstName);
    console.log('lastname: ', lastName);
    console.log('fullName: ', fullName);

  return (
    <div className='app'>
          <h1>Comp useState</h1>
          {toggle && <h3>{fullName}</h3>}
          <form onSubmit={getFullName}>
              <div>
                  <label>firstName :
                      <input type="text" value={firstName} onChange={getFirstName} />
                  </label>
              </div>
              <div>
                  <label>lastName :
                      <input type="text" value={lastName} onChange={getLastName} />
                  </label>
              </div>
              <button>Submit</button>
          </form>
          <button onClick={toggleFn}>toggle name</button>
    </div>
  )
}

export default CompUseState