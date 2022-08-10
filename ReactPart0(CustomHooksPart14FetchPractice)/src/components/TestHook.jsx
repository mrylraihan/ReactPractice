import React from 'react'
import useFetch from '../hooks/use-fetch'

function TestHook() {
    const result = useFetch('https://api.kanye.rest')
    console.log(result, ' from fetch return custom hook');
  return (
    <>
    <div>TestHook</div>
    {result && <p>{result.quote}</p>}
    </>
  )
}

export default TestHook