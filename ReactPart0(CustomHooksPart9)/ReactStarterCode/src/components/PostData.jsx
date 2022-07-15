import React, { useRef } from 'react'
import useFetch from '../hooks/use-fetch'

const PostData = () => {
    const { response, isLoading, setUrlConfig } = useFetch()
    const title = useRef()
    const body = useRef()

    
    

    const submitHandler = (e) =>{
        e.preventDefault()
        setUrlConfig({
          url:'https://jsonplaceholder.typicode.com/posts', 
            method:'POST', 
            body:{
                title: title.current.value,
                body: body.current.value,
                userId: Math.random() + Math.random()*10,
            }, headers: {
                'Content-type': 'application/json',
            }
        })
        title.current.value = ''
        body.current.value = ''
        
    }

    return (
        <div>
            {response.title && <h3>{response.title}</h3>}
            {isLoading && <p>...Loading</p>}
            <form onSubmit={submitHandler}>
                <label>
                    title:
                    <input type="text" ref={title}/>
                </label>
                <label>
                    body:
                    <input type="text" ref={body}/>
                </label>
                <button type='submit'>submit post</button>
            </form>
        </div>
    )
}

export default PostData