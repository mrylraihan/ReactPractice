import React from 'react'
import useFetch from '../hooks/use-fetch'
import { useNavigate } from 'react-router-dom'

function TestHook2() {
  // every time the component get rendered a new random number will generate
  const [result, getResult] = useFetch('https://jsonplaceholder.typicode.com/posts/' + Math.floor(Math.random() * 10) + 1)
  const nav = useNavigate()
  return (
    <div className='app'>
        <h1>Test Custom hook</h1>
        <p>testing our custom hook with a jsonplaceholder api</p>
        <button onClick={getResult}>show result</button>
        <div className='app'>
            {result && <h4>{result.title}</h4>}
            {result && <p>{result.body}</p>}
        </div>
      <button onClick={nav.bind(this, '/')}>go home</button>
    </div>
  )
}

export default TestHook2