import React from 'react'
import { useState } from 'react'

function FullNameState() {
  const [fName, setFname] = useState('')
  const [lName, setLname] = useState('')
  const [fullName, setFlname] = useState('')

  const getFirstName = (e)=>{
    setFname(e.target.value)
  }
  const getLastName = (e)=>{
    setLname(e.target.value)
  }
  const getFullName= (e)=>{
    e.preventDefault()
    // setFlname(`${fName} ${lName}`) simple way
    setFlname(prev=>{
      return prev = fName && lName ? `${fName} ${lName}` :prev 
    })
    setFname('')
    setLname('')
  }
  console.log({ fName , lName, fullName}, 'from useState');

  return (
    <div className='app'>
          <h1>FullName with just State</h1>
          {fullName && <h3>{fullName}</h3>}
          <form onSubmit={getFullName}>
            <div>
              <label>
                <input type="text" value={fName} onChange={getFirstName}/>
              </label>
            </div>
            <div>
              <label>
                <input type="text" value={lName} onChange={getLastName}/>
              </label>
            </div>
            <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default FullNameState