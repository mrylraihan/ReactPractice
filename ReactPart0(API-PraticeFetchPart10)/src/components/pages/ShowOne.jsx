import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ShowOne = () => {
    const [data, setData] = useState({})
    const nav = useNavigate()
    const params = useParams()
    const id = params.id
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(result=>setData(result))
        .catch(console.error)
    }, [id])
    return (
        <div className='app'>
            <h1>Show 1</h1>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
            <button onClick={nav.bind(this,-1)}>go back</button>
        </div>
    )
}

export default ShowOne