import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateOne(props) {
    const [post, setPost] = useState('')
    const titleRef = useRef()
    const bodyRef = useRef()
    const nav = useNavigate()

    const OnSubmitHandler = (e)=>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: titleRef.current.value,
            body: bodyRef.current.value,
            userId: 1
        })
        .then(res=>res.data)
        .then(result=>{
            result.id = props.data.length
            setPost(result)
            props.setData(prev=>[...prev,result])
            bodyRef.current.value = ''
            titleRef.current.value = ''
        })
        .catch(console.error)
    }
console.log(post);
  return (
    <>
    <div className='app'>
          <h1>CreateOne</h1>
          <form onSubmit={OnSubmitHandler}>
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
          <button onClick={nav.bind(this, '/getall')}>Go back to all</button>
    </div>
    {post && <div className='app'>
        <h1>{post.title}</h1>
        <h2>{post.body}</h2>
        </div>}
    </>
  )
}

export default CreateOne