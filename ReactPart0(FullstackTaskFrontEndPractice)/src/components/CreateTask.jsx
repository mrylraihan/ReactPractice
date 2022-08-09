import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateTask() {
    const [newTask, setNewTask] = useState('')
    const titleRef = useRef()
    const bodyRef = useRef()
    const nav = useNavigate()

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        const task = {
            title : titleRef.current.value,
            body: bodyRef.current.value
        }
        fetch('http://localhost:4000/task', {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(task)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            setNewTask(result)
            titleRef.current.value = ''
            bodyRef.current.value = ''
        })
        .catch(console.error)
    }
    
    console.log();
  return (
    <>
    <div>CreateTask</div>
          {newTask && <h3>{newTask.title}</h3>}
    <form onSubmit={onSubmitHandler}>
        <div>
            <label>Title:
                    <input type="text" ref={titleRef}/>
            </label>
        </div>
        <div>
            <label>Body:
                    <input type="text" ref={bodyRef}/>
            </label>
        </div>
        <button type='submit'>submit</button>
    </form>
    <button onClick={()=>nav(-1)}>go back</button>
    </>
  )
}

export default CreateTask