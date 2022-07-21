import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ShowOne({ teacherList, setTeacherList }) {
const [teacher , setTeacher] = useState('')
const nav = useNavigate()
const params = useParams()
const id = params.id
useEffect(()=>{
    setTeacher(teacherList.filter((item) => {
       return item.id == id
    })[0])
}, [])

const deleteTeacher = ()=>{
    setTeacherList(teacherList.filter(teacher=>{
            return teacher.id !== +id
        }))
        nav(-1)
}
    return (
        <div className='app'>
        <h1>show one</h1>
        <h3 key={teacher.id}>{teacher.name}</h3>
        <button onClick={nav.bind(this, -1)} >go back</button>
        <button onClick={deleteTeacher} >remove teacher</button>
        </div>
    )
}

export default ShowOne
