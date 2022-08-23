import React from 'react'
import { useContext } from 'react'
import ContextTest from '../store/context-file'
function FourthLevel() {
    const ctx = useContext(ContextTest)
  return (
    <div className='app'>
    <h1>FourthLevel</h1>
    <h5>{ctx.result}</h5>
    </div>
  )
}

export default FourthLevel