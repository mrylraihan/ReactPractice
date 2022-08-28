import axios from 'axios'
import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function CreatePost(props) {
  const [post, setPost] = useState('')
  const titleRef = useRef()
  const bodyRef = useRef()
  const nav= useNavigate()

  useEffect(()=>{
    if(post){
      props.setData(prev=>[...prev,post])
    }
  },[post])

  const onsubmitHandler = (e)=>{
    e.preventDefault()
    if (titleRef.current.value && bodyRef.current.value){
      axios.post('https://jsonplaceholder.typicode.com/posts',
      {
        title:titleRef.current.value,
        body:bodyRef.current.value,
        userId: 1,
      })
      .then(res=>res.data)
      .then(result=>{
        result.id = props.data.length+2
        setPost(result)
        titleRef.current.value=''
        bodyRef.current.value=''
      })
      .catch(console.error)
    }
  }
console.log(post);
  return (
    <>
    <div className='app'>
      <h1>CreatePost</h1>
      <form onSubmit={onsubmitHandler}>
        <div>
        <label>title:
          <input type="text" ref={titleRef}/>
        </label>
        </div>
        <div>
        <label>body:
          <input type="text" ref={bodyRef}/>
        </label>
        </div>
        <button>submit</button>
      </form>
    </div>
    {post && <div className='app'>
      <h1>{post.title}</h1>
      <h1>{post.body}</h1>
      <button onClick={nav.bind(this,'/SeeAll')}>see all</button>
    </div>}
    </>
  )
}

export default CreatePost