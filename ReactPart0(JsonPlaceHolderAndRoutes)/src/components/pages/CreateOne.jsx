import React, { useEffect, useState, useRef } from 'react'

const CreateOne = ({ setAllPost }) => {
  const title = useRef()
  const body = useRef()
  const [post, setPost] = useState({})

  useEffect(() => {
    if(post){
      setAllPost(prev=>{
        return [...prev, {...post, id: prev.length+1 }]
      })
    }
  }, [post])

  const onSubmitHandler = () => {
    
    const request = {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: title.current.value,
        body: body.current.value,
        userId:1,
      })
    }
      fetch(`https://jsonplaceholder.typicode.com/posts`, request)
        .then(res=>res.json())
        .then(data => setPost(data))
        .catch(err => console.log(err))

    // clearing obj values 
    title.current.value = ''
    body.current.value = ''
  }
  return (
    <>
      <div className='app'>
        <h3>Create a Post!</h3>
        <div>
        <label>
          create a title:
          <input type="text" ref={title} />
        </label>
        </div>
        <div>
        <label>
          and Body:
          <input type="text" ref={body} />
        </label>
        </div>
        <button onClick={onSubmitHandler}>Submit your post!</button>
      </div>
     {post.title && <div className='app'>
        <p>Title: {post && post.title}</p>
        <p>Post: {post && post.body}</p>
      </div>}
    </>
  )
}

export default CreateOne