import React from 'react'
import { useNavigate } from 'react-router-dom'

function ShowAll({teacherList}) {
    const nav = useNavigate()
    return (
        <div className='app'>
            <h1>teachers List</h1>
        {teacherList.map(ele=>
        <p key={ele.id} onClick={nav.bind(this,`/${ele.id}`)}>{ele.name}</p>)}
        </div>
    )
}

export default ShowAll
