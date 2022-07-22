import React, { useEffect, useRef, useState } from 'react'

function CreateOne(props) {
    const title = useRef()
    const [task, setTask] = useState([])

    useEffect(()=>{
        if(task) props.addTask(prev=>prev.concat(task))
    }, [task])

    const submitHandler=(e)=>{
        e.preventDefault()
        setTask([{
            userId: 1,
            id: props.length + 1,
            title: title.current.value,
            completed: false
        }])
        title.current.value = ''
    }
    return (
        <div className='app'>
            <h1>create a todo</h1>
            <form onSubmit={submitHandler}>
                <label>
                    whats the name of your Todo:
                    <input type="text" ref={title} />
                </label>
                <button type='submit'>submit task</button>
            </form>
        </div>
    )
}

export default CreateOne
