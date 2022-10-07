import React, { useState } from 'react'

function TestPropsChildren2(props) {
  const [children ,setChildren] = useState(props.children)
  return (
    <div className='app'>Test Props Children1 {children}</div>
  )
}

export default TestPropsChildren2