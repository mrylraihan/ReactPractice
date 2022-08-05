import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SeeAll = () => {
    const [listTask, setListTask] = useState('')
    const nav = useNavigate()
    useEffect(()=>{
        fetch('http://localhost:4000/task')
        .then(res=>res.json())
        .then(setListTask)
        .catch(console.error)
    }, [])
    console.log(listTask);
    return (
        <div className='app'>
            <h1>See all</h1>
            <button onClick={() => nav(-1)}>go back</button>
            <div>
                {listTask && listTask.map(ele => <p key={ele.id} onClick={()=> nav(`/allTask/${ele._id}`)}>{ele.title}</p>)}
            </div>
        </div>
    )
}

export default SeeAll