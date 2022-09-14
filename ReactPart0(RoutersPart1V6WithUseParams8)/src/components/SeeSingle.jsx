import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SeeSingle(props) {
    const [person, setPerson] = useState({})
    const params = useParams()
    const id = params.id
    const nav = useNavigate()
    useEffect(()=>{
        setPerson(props.list.find(ele=>ele.id === +id))
    },[id])
  return (
    <div className='app'>
    <h1>SeeSingle</h1>
    {person.name && <h2>{person.name}</h2>}
    <button onClick={nav.bind(this,-1)}>go back</button>
    </div>
  )
}

export default SeeSingle