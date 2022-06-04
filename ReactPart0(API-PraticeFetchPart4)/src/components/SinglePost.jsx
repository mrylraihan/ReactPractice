import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const SinglePost = (props) => {
    const [singlePost, setSinglePost] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id
            }`)
            .then(result => result.data)
            .then(data => setSinglePost(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <p>{singlePost.title}</p>
            <p>params id is :{id}, and singlePost id is: {singlePost.id} </p>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    )
}

export default SinglePost