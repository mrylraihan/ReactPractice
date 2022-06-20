import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const UseEffectExample = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetchPosts()
    },[])

    function fetchPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(result =>setPosts(result))
        .catch(err=>console.log(err))
    }
    
    return (
        <div>
            {posts.map(post=>{
                return <div key={post.id}>
                    <Link to={`/${post.id}`}>
                        <h3>Title: {post.title}</h3>
                    </Link>
                </div>
            })}
        </div>
    )
}

export default UseEffectExample