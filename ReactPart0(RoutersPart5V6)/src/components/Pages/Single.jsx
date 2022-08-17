import React, { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

function Single({list}) {
  const [person, setPerson] = useState('')
  const params = useParams()
  const id = params.id
  const nav = useNavigate()
  useEffect(()=>{
    setPerson(list.find(ele => ele.id == +id))
  },[id])

  // or just this
  // const singlePerson = list.find(ele=>ele.id == +id)

  return (
    <div>
      <h1>Single</h1>
      <h3>{person.name}</h3>
      <button onClick={nav.bind(this, -1)}>go back</button>
    </div>

  )
}

export default Single