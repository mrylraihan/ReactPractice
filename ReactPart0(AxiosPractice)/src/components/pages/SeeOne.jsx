import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SeeOne(props) {
    const [singleItem, setSingleItem] = useState('')
    const params = useParams()
    const id = params.id
    const nav = useNavigate()

    useEffect(()=>{
        setSingleItem(props.data.find(ele=>ele.id == id))
    },[id])

    const deleteHandler = ()=>{
        props.setData(props.data.filter(ele=>ele.id !== +id))
        nav(-1)
    }
    console.log(singleItem);

  return (
    <div className='app'>
          <h1>See One post</h1>
          {singleItem && <h2>{singleItem.title}</h2>}
          {singleItem && <p>{singleItem.body}</p>}
          <button onClick={deleteHandler}> remove post </button>
          <button onClick={nav.bind(this,-1)}> Go back </button>
    </div>
  )
}

export default SeeOne