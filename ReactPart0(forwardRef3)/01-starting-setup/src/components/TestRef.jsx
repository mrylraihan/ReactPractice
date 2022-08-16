import React, { useState } from 'react'

const TestRef=React.forwardRef((props,ref)=> {
    const [test, setTest] = useState('')
  const onSubmit = ()=>{
      setTest(ref.current.value)
      ref.current.value = ''
  }
  return (
    <div>
    {test && <p>{test}</p>}
    <div>TestRef</div>
          <button onClick={onSubmit}>show me</button>
    </div>
  )

})


export default TestRef