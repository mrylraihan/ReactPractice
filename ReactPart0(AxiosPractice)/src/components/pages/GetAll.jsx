import React from 'react'
import { useNavigate } from 'react-router-dom'


function GetAll({data}) {
    const nav = useNavigate()
    const content = data.map(ele => {
        return <div className='app' key={ele.id}>
            <p onClick={nav.bind(this,`${ele.id}`)}>{ele.title}</p>
        </div>
    })
 
  return (
    <div>
          {data.length>0 && content}
          {!content && <p>no data yet</p>}
    </div>
  )
}

export default GetAll