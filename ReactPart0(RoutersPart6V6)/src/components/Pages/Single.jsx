import React, { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

function Single({list}) {
  const [post, setPost] = useState('')
  const params = useParams()
  const id = params.id
  const nav = useNavigate()
  useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    //   .then(res => res.json())
    //   .then(setPost)
    //   .catch(error=>{
    //     setPost(list.find(ele => ele.id == +id))
    //     console.log(error)
    //   })

    setPost(list.find(ele => ele.id == +id))

      
  },[id])
console.log(list);
  // or just this
  // const singlePerson = list.find(ele=>ele.id == +id)

  return (
    <div className='app'>
      <h1>Single</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={nav.bind(this, -1)}>go back</button>
    </div>

  )
}

export default Single