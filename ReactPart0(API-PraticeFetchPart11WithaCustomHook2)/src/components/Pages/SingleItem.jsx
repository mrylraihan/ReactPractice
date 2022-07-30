import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleItem = ({ data :list , setData : setList }) => {
    const [data, setData] = useState('')
    const params = useParams()
    const id = params.id
    const nav = useNavigate()
    useEffect(()=>{
        setData(list.filter(ele=>ele.id == id)[0])
    },[id])

    const deleteHandler=()=>{
        setList(list.filter(ele=>ele.id !== +id))
        nav(-1)
    }
    return (
        <div className='app'>
            <h1>Single Item</h1>
            {data && <p>{data.title}</p>}
            {data && <p>{data.id}</p>}
            <button onClick={nav.bind(this, -1)}>go back</button>
            <button onClick={deleteHandler}>Delete post</button>
        </div>
    )
}

export default SingleItem