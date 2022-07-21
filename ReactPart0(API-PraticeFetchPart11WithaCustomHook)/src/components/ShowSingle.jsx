import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ShowSingle = ({data, setData}) => {
    const [todo, setTodo] = useState('')
    const nav = useNavigate()
    const params = useParams()
    const id = params.id

    useEffect(()=>{
        // const singleTodo = data.filter((item) => item.id == id)[0]
        setTodo(data.filter((item) => item.id === +id)[0])
    }, [id])

    const deleteHandler=()=>{
        setData(data.filter((item) => item.id !== +id))
        nav(-1)
    }
    
    return (
        <div className='app'>
            <h1>Showing a single todo!</h1>
            <h4>{todo.title}</h4>
            <button onClick={nav.bind(this, -1)}>go back</button>
            <button onClick={deleteHandler}>delete a todo</button>
        </div>
    )
}

export default ShowSingle