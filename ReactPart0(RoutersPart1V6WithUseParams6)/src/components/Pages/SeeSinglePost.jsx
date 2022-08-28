import React , { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

function SeeSinglePost(props) {
  const [singlePost, setSingle] = useState('')
  const params = useParams()
  const id = params.id
  const nav = useNavigate()
  useEffect(()=>{
    setSingle(props.data.filter(ele=>ele.id === +id)[0])
  },[id])

  const deleteHandler = () =>{
    props.setData(props.data.filter(ele=>ele.id !== +id))
    nav(-1)
  }

  return (
    <div className='app'>
      <h1>SeeSinglePost</h1>
      <h3>{id}</h3>
      {singlePost && <h3>{singlePost.title}</h3>}
      {singlePost && <h3>{singlePost.body}</h3>}
      <button onClick={deleteHandler}>Delete Post</button>
      <button onClick={nav.bind(this,-1)}>go back</button>
    </div>
  )
}

export default SeeSinglePost