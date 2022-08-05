import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SingleTask() {
    const [task, setTask] = useState('')
    const params = useParams()
    const id = params.id
    const nav = useNavigate()

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:4000/task/${id}`)
            .then(res => res.json())
            .then(setTask)
            .catch(console.error)
        }
    },[id])

const deleteHandler=()=>{
   
    fetch(`http://localhost:4000/task/${id}`, { method: "DELETE" })
        .then(res => res.json())
        .then(()=>nav(-1))
        .catch(console.error)
}
  return (
    <>
    <div>SingleTask</div>
    {task && <h1>{task.title}</h1>}
    {task && <h2>{task.body}</h2>}
    <button onClick={()=>nav(-1)}>go back</button>
    <button onClick={deleteHandler}>delete task</button>
    </>
  )
}

export default SingleTask