import React from 'react'
import { useNavigate } from 'react-router-dom'


function AllPage({list}) {
  const nav = useNavigate()

  const mappedList = list.map(ele => <li key={ele.title} onClick={() => nav(`/all/${ele.id}`)}>{ele.title}</li>)
  return (
    <div className='app'>
      <h1>AllPage</h1>
      <ul>
        {mappedList}
      </ul>
      <button onClick={nav.bind(this,'/')}>go back</button>
    </div>
  )
}

export default AllPage