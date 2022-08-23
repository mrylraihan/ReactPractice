import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const CreatePostAxios = () => {
    const [yourPost, setYourPost] = useState({})
    const title = useRef()
    const body = useRef()
    const [post, setPost] = useState({})

    useEffect(()=>{
        if(yourPost)
        axios.post(`https://jsonplaceholder.typicode.com/posts`, yourPost)
        .then(result=>{
            console.log(result.data);
            return result.data})
        .then(data=>setPost(data))
        .catch(err=>console.log(err))
    }, [yourPost])

    const onSubmitHandler = ()=>{
        setYourPost({
            title: title.current.value, 
            body:body.current.value                                    
        })
        title.current.value = ''
        body.current.value = ''
    }
    return (
        <>
        <div className='app'>
            <h3>Create a Post!</h3>
            <label>
                create a title:
                <input type="text" ref={title}/>
            </label>
            <label>
                and Body:
                <input type="text" ref={body}/>
            </label>
                <button onClick={onSubmitHandler}>Submit your post!</button>
        </div>
        <div>
                <p>{post && post.title}</p>
                <p>{post && post.body}</p>
        </div>
        </>
    )
}

export default CreatePostAxios