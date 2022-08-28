import React from 'react'
import {useNavigate} from 'react-router-dom'

function SeeAll(props) {
  const nav = useNavigate()
  
  const mapData = props.data.map(ele=>{
    return <div key={ele.id} className='app' onClick={nav.bind(this,`/SeeAll/${ele.id}`)}>
      <p id={ele.id}>{ele.title}</p>
    </div>
  })

  return (
    <div className='app'>
      <h1>SeeAll</h1>
      <div>
        {props.data.length > 0 && mapData}
      </div>
    </div>
  )
}

export default SeeAll