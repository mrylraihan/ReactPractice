import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FindOne = () => {
    const [data, setData] = useState('')
    const number = useRef()
    const nav= useNavigate()

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        fetch(`https://jsonplaceholder.typicode.com/posts/${number.current.value}`)
        .then(res=>res.json())
        .then(setData)
        .then(() => number.current.value = '')
        .catch(console.error)
    }

    return (
        <div className='app'>
            <h1>Find One</h1>
            <form onSubmit={onSubmitHandler}>
                <label>
                    <input type="number" placeholder='type you id' ref={number}/>
                </label>
                <button type='submit'>submit id</button>
            </form>
            <button onClick={nav.bind(this, -1)}>go back</button>
            {data && <div>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div>}
        </div>
    )
}

export default FindOne