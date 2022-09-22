import React from 'react'
import useFetch from '../hooks/use-fetch'

function TestCustomHook() {
    const [result, getData] = useFetch()
  return (
    <div>
          <h1>TestCustomHook</h1>
          {result && <h1>{result.quote}</h1>}
          <button onClick={getData}>get Quote</button>
    </div>
  )
}

export default TestCustomHook