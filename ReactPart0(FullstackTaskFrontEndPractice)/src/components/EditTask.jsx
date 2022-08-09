import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditTask() {
    const [newTask, setNewTask] = useState('')
    const [oldTask , setTask] = useState('')
    const titleRef = useRef()
    const bodyRef = useRef()
    const nav = useNavigate()
    const params = useParams()
    const id = params.id
    

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:4000/task/${id}`)
                .then(res => res.json())
                .then(setTask)
                .catch(console.error)
        }
    }, [])



const onSubmitHandler = (e) => {
    e.preventDefault()
    const task = {
        title: titleRef.current.value,
        body: bodyRef.current.value
    }
    fetch('http://localhost:4000/task/'+id, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setTask('')
            setNewTask(result)
            titleRef.current.value = ''
            bodyRef.current.value = ''
        })
        .catch(console.error)
}

    return (
        <div>
            <h1>Edit Task</h1>
            <ul>
            {oldTask && <li>{oldTask.title}</li>}
            </ul>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Title:
                        <input type="text" ref={titleRef} />
                    </label>
                </div>
                <div>
                    <label>Body:
                        <input type="text" ref={bodyRef} />
                    </label>
                </div>
                <button type='submit'>submit</button>
            </form>
            <button onClick={nav.bind(this,'/allTask')} >go back to see all</button>
            {newTask && <h1>New task</h1>}
            {newTask && <h2>{newTask.title}</h2>}
            {newTask && <p>{newTask.body}</p>}

        </div>
    )
}

export default EditTask
