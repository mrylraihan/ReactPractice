import React from 'react'
import { useSelector } from 'react-redux'


function Test3() {
const quote = useSelector(state=>state.quote)
    
  return (
    <div>
          <h1>Test3</h1>
          <p>{quote}</p>
    </div>
  )
}

export default Test3