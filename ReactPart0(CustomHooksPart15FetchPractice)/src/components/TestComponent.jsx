import React from 'react'
import { useState } from 'react'
import useFetch from '../hooks/use-fetch'

function TestComponent() {
    const [result, setToggle]  = useFetch('https://api.kanye.rest')
    const [quote, setQuote] = useState('')

    const getQuote = ()=>{
        setToggle(prev=>!prev)
        setQuote(result.quote)
    }
  return (
    <div>
          <h1>TestComponent</h1>
          {quote && <h1>{quote}</h1>}
            <button onClick={getQuote}>show me a quote</button>
    </div>
  )
}

export default TestComponent