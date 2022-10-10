import React from 'react'
import { useSelector } from 'react-redux'

function DisplayName() {
    const nameList = useSelector(state=>state.name.nameList)
    const content = nameList.map((name, idx)=><li key={idx}>{name}</li>)
  return (
    <div className='app'>
          <h3>DisplayName</h3>
          <ul>
            {content}
          </ul>
    </div>
    
  )
}

export default DisplayName