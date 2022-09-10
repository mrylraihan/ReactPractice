import React from 'react'

function Test1(props) {
  console.log('in test', props.list);
  return (
    <div className='app'>
        <h1>Test1</h1>
    </div>
  
  )
}

export default Test1