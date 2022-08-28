import React, { useState } from 'react'

const TodoForm = (props) => {
    const [task , setTask]= useState('')
    const taskOnChange = e =>{
        setTask(e.target.value)
    }

    const onSubmitHandler = e =>{
        e.preventDefault()
        props.setToDo(prev=>{
            return [...prev, {id:prev.length, title:task}]
        })
        setTask('')
    }

    return (
        <div className='app'>
            <h1>add something to your list!</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>add a task:
                        <input type="text" value={task} onChange={taskOnChange}/>
                    </label>
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default TodoForm