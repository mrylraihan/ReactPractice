import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function CreateOne({setData, data}) {
    const [post, setPost] = useState('')
    const title = useRef()
    const body = useRef()
    
    useEffect(()=>{
        if(post){
            setData(prev=>[...prev, post])
        }
    }, [post])

    const submitHandler=(e)=>{
        e.preventDefault()
        setPost({
            id: data.length+1,
            title:title.current.value,
            body:body.current.value
        })

        title.current.value = ''
        body.current.value = ''
    }
    console.log(post);
    return (
        <div className='app'>
            <h1> create a post </h1>
        <form onSubmit={submitHandler}>
            <div>
                <label>
                    title of your post:
                    <input type="text" ref={title}/>
                </label>
            </div>
            <div>
                <label>
                    body of your post:
                    <input type="text" ref={body}/>
                </label>
            </div>
            <button type='submit'>submit post</button>
        </form>
        {/* space to show new obj */}
        {
            post && <p>{post.title}</p>
        }
        </div>

    )
}

export default CreateOne
