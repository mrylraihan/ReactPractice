import React, { useState } from 'react'
import { useEffect } from 'react'

function DependArray() {
    const [toggle, setToggle] = useState(false)

    useEffect(()=>{
        console.log('useEffect with dependency array not empty');
    }, [toggle])
  return (
    <div className='app'>
          <h2>DependArray</h2>
          <button onClick={()=>{
            setToggle(!toggle)
          }}>click me</button>
    </div>
  )
}

export default DependArray