import React from 'react'
import { useState } from 'react'

function FetchComp(props) {
    const [quote, setQuote] = useState('')
    const getQuote = ()=>{
        fetch('https://api.kanye.rest')
        .then(res=>res.json())
        .then(result=>{
            setQuote(result.quote)
            props.addToList(prev=>{
                return [...prev, result.quote]
            })
        })
        .catch(console.error)
    }
  return (
    <div className='app'>
          <h1>FetchComp</h1>
            {quote && <h5>{quote}</h5>}
          <button onClick={getQuote}>get a Quote</button>
    </div>
  )
}

export default FetchComp