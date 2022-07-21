import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function AddTeacher({ setTeacher, teacherLength }) {
    const name = useRef()
    
    const nav = useNavigate()

    const submitTeacherHandler = (e)=>{
        e.preventDefault()
        setTeacher(prev=>{
                return [...prev, {id: teacherLength+1 , name: name.current.value}]
            })
            name.current.value = ''
            nav('/')
    }
    return (
        <div className='app'>
            <form onSubmit={submitTeacherHandler}>
            <label>
                teachers Name: 
                <input type="text" ref={name} />
            </label>
            <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default AddTeacher
