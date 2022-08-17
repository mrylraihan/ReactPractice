import React from 'react'
import { useNavigate } from 'react-router-dom'


function AllPage({list}) {
  const nav = useNavigate()

  const mappedList = list.map(ele => <li key={ele.id} onClick={() => nav(`/all/${ele.id}`)}>{ele.name}</li>)
  return (
    <div>
      <h1>AllPage</h1>
      <ul>
        {mappedList}
      </ul>
      <button onClick={nav.bind(this,'/')}>go back</button>
    </div>
  )
}

export default AllPage