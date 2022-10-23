import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
function UseParamsComp(props) {
  const [post, setPost] = useState()
  const params = useParams()
  const id = params.id

  useEffect(()=>{
   const item = props.list.find(ele=>ele.id == id)
    setPost(item)
  },[id])
console.log(post);
  return (
      <div className='app'>
      <h4>UseParamsComp</h4>
      <h5>{post.title}</h5>
      <p>{post.body}</p>
      
      </div>
  )
}

export default UseParamsComp