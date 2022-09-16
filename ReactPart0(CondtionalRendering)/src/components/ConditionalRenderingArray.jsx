import React from 'react'
import { useState } from 'react'

function ConditionalRenderingArray() {
  const [arr, setArr] = useState([])
  const data = ['Word', 'Mike', 'Sandwich', 99]
  const mappedData = arr.map((ele,idx)=>{
    return<li key={idx}>{ele}</li>
  })

  const toggleArray = () =>{
    setArr(arr.length>0 ? [] : data)
  }
  return (
    <div className='app'>
          <h1>Conditional Rendering Array</h1>
          <ul>
          {arr.length > 0 && mappedData}
          </ul>
      <button onClick={toggleArray}>{arr.length > 0 ? 'Hide Data':'Show Data'}</button>
    </div>
  )
}

export default ConditionalRenderingArray