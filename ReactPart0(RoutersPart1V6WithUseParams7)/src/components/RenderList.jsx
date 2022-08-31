import React from 'react'
import { useNavigate } from 'react-router-dom'

function RenderList(props) {
   const nav = useNavigate()
  return (
    <div className='app'>
    <h1>RenderList</h1>
    {props.list.length>0 && props.list.map((ele, idx)=>{
        return <p key={idx} onClick={nav.bind(this,`/renderlist/${ele.id}`)}>{ele.title}</p>
    })}
    </div>
  )
}

export default RenderList