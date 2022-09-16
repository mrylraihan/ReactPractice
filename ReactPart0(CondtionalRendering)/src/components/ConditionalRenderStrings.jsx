import React from 'react'
import { useState } from 'react'

function ConditionalRenderStrings() {
  const [string, setString] = useState('')
  const toggleString = ()=>{
    setString(string?'':'Testing')
  }
  return (
    <div className='app'>
          <h1>Conditional Rendering Strings</h1>
          {string && <p>{string}</p>}
      <button onClick={toggleString}>{string ? 'Hide String': 'Show String'}</button>
    </div>
  )
}

export default ConditionalRenderStrings