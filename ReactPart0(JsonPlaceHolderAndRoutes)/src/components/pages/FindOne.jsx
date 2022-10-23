import React, { useRef, useState } from 'react'

function FindOne() {
  const [post, setPost] = useState('')
  const inputRef = useRef()

  const submitId = (e) => {
    e.preventDefault()
    fetch(`https://jsonplaceholder.typicode.com/posts/${inputRef.current.value}`)
      .then(res => res.json())
      .then(setPost)
      .catch(console.error)
  }
  console.log(post);
  return (
    <>
      <div className='app'>
        <h3>FindOne</h3>
        <form onSubmit={submitId}>
          <div>
            <label>which post are you trying to find:
              <input type="number" placeholder='input the id you need' ref={inputRef}/>
            </label>
          </div>
          <button>find post</button>
        </form>
      </div>
      {post && <div className='app'>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      </div>}
    </>
  )
}

export default FindOne