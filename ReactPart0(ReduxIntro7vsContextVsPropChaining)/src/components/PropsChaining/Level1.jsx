import React from 'react'
import Level2 from './Level2'

function Level1(props) {
  return (
    <div className='app'>
        <Level2 {...props}/>
    </div>
  )
}

export default Level1