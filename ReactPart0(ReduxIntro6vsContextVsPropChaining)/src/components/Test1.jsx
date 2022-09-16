import React from 'react'
// passing in fetch result as props 
function Test1(props) {
  return (
    <div>
        <h1>Test 1</h1>
        <p>{props.result.quote}</p>
    </div>
  )
}

export default Test1