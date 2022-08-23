import React, { useEffect, useState, useRef } from 'react'

const CreatePost = () => {
    const [yourPost, setYourPost] = useState({})
    const title = useRef()
    const body = useRef()
    const [post, setPost] = useState({})

    useEffect(() => {
        const request = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(yourPost)
        }
        if (yourPost)
            fetch(`https://jsonplaceholder.typicode.com/posts`, request)
                .then(result => {
                    console.log(result.json());
                    return result.json()
                })
                .then(data => setPost(data))
                .catch(err => console.log(err))
    }, [yourPost])

    const onSubmitHandler = () => {
        setYourPost({
            title: title.current.value,
            body: body.current.value
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
                    <input type="text" ref={title} />
                </label>
                <label>
                    and Body:
                    <input type="text" ref={body} />
                </label>
                <button onClick={onSubmitHandler}>Submit your post!</button>
            </div>
            <div>
                <p>{post && post.title}</p>
            </div>
        </>
    )
}

export default CreatePost