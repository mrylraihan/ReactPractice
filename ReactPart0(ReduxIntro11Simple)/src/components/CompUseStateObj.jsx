import React, { useState } from 'react'

const initial = {
    firstName: '',
    lastName: '',
    fullName: '',
    toggleName: true
}

function CompUseStateObj() {

    const [stateObj, setStateObj] = useState(initial)

    const getFirstName = (e)=>{
        setStateObj(prev=>{
            return { ...prev, firstName: e.target.value }
        })
    }

    const getLastName = (e)=>{
        setStateObj(prev => {
            return { ...prev, lastName: e.target.value }
        })
    }
    const getFullName = (e)=>{
        e.preventDefault()
        setStateObj(prev => {
            return { ...prev, fullName:`${prev.firstName} ${prev.lastName}`, firstName:'', lastName:'' }
        })
    }
    const toggleFn = ()=>{
        setStateObj(prev=>{
            return {...prev, toggle:!prev.toggle}
        })
    }
console.log(stateObj, 'from the state obj');
  return (
    <div className='app'>
          <h1>Comp useState Obj</h1>
          {stateObj.toggle && <h3>{stateObj.fullName}</h3>}
          <form onSubmit={getFullName}>
              <div>
                  <label>firstName :
                      <input type="text" value={stateObj.firstName} onChange={getFirstName} />
                  </label>
              </div>
              <div>
                  <label>lastName :
                      <input type="text" value={stateObj.lastName} onChange={getLastName} />
                  </label>
              </div>
              <button>Submit</button>
          </form>
          <button onClick={toggleFn}>toggle name</button>
    </div>
  )
}

export default CompUseStateObj