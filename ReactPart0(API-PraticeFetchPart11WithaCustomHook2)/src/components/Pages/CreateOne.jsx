import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateOne = ({setData, length}) => {
const [newTask, setNewTask] = useState({})
const [inputTask, setInputTask] = useState('')
const [isTouched, setIsTouched] = useState(false)
const nav = useNavigate()

const inputIsValid = inputTask.trim() != ''
const isValid = inputIsValid && isTouched
useEffect(()=>{
    setData(prev=>prev.concat([newTask]))
}, [newTask])

const onBlurHandler=()=>{
    setIsTouched(true)
    console.log('touched');
}

const onChangeHandler = (e) =>{
    setInputTask(e.target.value)
}

const onSubmit = ()=>{
    if (isValid){
        setNewTask({
            userId: 1,
            id: ++length,
            title: inputTask,
            completed: false
        })
        console.log('its working');
    }
    setInputTask('')
    setIsTouched(false)
} 
    return (
        <div className='app'>
            <h1>CreateOne</h1>
            <div>
                <label> create a task:
                    <input type="text" value={inputTask} onChange={onChangeHandler} onBlur={onBlurHandler}/>
                </label>
                <button disabled={!inputIsValid && isTouched} onClick={onSubmit}>submit task</button>
            </div>

            {newTask && <p>{newTask.title}</p>}
            <button onClick={nav.bind(this, -1)}>go back</button>
            {!isValid && <p>you didnt write anything!</p>}
        </div>
    )
}

export default CreateOne