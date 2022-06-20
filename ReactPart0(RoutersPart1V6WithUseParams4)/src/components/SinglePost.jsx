import React, { useEffect, useState } from 'react'
import { useNavigate , useParams} from 'react-router-dom'

const SinglePost = () => {
    const [post, setPost] = useState({})
    const { postId } = useParams()
    const nav = useNavigate()
    useEffect(() => {
        fetchSinglePost()
    }, [])

    function fetchSinglePost() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(result => setPost(result))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h4>Post#:{post.id}</h4>
            <h2>Title#:{post.title}</h2>
            <p>Body:{post.body}</p>
            <button onClick={()=>nav(-1)}>go back</button>
        </div>
    )
}

export default SinglePost