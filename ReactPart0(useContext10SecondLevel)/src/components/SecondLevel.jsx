import React from 'react'
import ThirdLevel from './ThirdLevel'
import ContextTest from '../store/context-file'
import { useState } from 'react'
function SecondLevel() {
    const [result, setResult] = useState('')
    const getQuote = ()=>{
        fetch('https://api.kanye.rest')
        .then(res=>res.json())
        .then(setResult)
        .catch(console.error)
    }
  return (
    <div className='app'>
    <h1>SecondLevel</h1>
    <button onClick={getQuote}>show me a quote</button>
    {/* this will be cross component wide context that is now binded to the result state, so all components under/nested in this tag will have access to the state updating context */}
    <ContextTest.Provider value={{result:result.quote}}>
    <ThirdLevel/>
    </ContextTest.Provider>
    </div>
  )
}

export default SecondLevel