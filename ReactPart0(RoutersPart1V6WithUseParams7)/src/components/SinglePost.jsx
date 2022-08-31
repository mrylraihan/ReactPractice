import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function SinglePost({list}) {
    const [singlePost, setSinglePost] = useState('')
    const params = useParams()
    const id = params.cat
    console.log(id);
    console.log(list);

    useEffect(()=>{
        setSinglePost(list.filter((ele)=>{
            return ele.id === +id
        })[0])
    }, [id])

  return (
    <div className='app'>
        <h1>Single post</h1>
        {singlePost && <h3>{singlePost.title}</h3>}
        {singlePost && <h3>{singlePost.body}</h3>}
    </div>
  )
}

export default SinglePost