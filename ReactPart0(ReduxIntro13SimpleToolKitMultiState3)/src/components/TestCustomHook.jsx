import React from 'react'
import UseFetch from '../hook/use-fetch'

function TestCustomHook() {
  const [quote, getQuote] = UseFetch('https://api.kanye.rest')
  return (
    <div className='app'>
      <h1>Test Custom Hook</h1>
      {quote && <h3>{quote}</h3>}
      <button onClick={getQuote}>get quote</button>
    </div>
  )
}

export default TestCustomHook