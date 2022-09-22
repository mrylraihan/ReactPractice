import React from 'react'
import useFetch from '../hooks/use-fetch'
import { useNavigate } from 'react-router-dom'

function TestHook1() {
    const [result, getResult] = useFetch('https://api.kanye.rest')
    const nav = useNavigate()
  return (
    <div className='app'>
        <h1>Test Custom hook</h1>
        <p>testing our custom hook with a Kanye quote</p>
        <button onClick={getResult}>show result</button>
        <div className='app'>
            {result && <h4>{result.quote}</h4>}
        </div>
      <button onClick={nav.bind(this,'/')}>go home</button>
    </div>
  )
}

export default TestHook1