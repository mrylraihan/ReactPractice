import React from 'react'
import useAxios from '../hooks/use-axios'

function TestHook2() {
  const result = useAxios('https://api.kanye.rest')
  console.log(result, ' from axios return custom hook');
  return (
    <>
      <div>TestHook</div>
      {result && <p>{result.quote}</p>}
    </>
  )
}

export default TestHook2