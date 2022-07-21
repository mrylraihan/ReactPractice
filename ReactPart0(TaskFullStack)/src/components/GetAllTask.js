import React, { useEffect, useState } from 'react'

function GetAllTask() {
    const [taskList, setTaskList] = useState('')

    useEffect(()=>{
        fetch('http://localhost:4002/task')
        // fetch('https://api.kanye.rest')
        .then(res=>res.json())
        .then(setTaskList)
        .catch(console.error)
    }, [])

    return (
        <>
        <h3>Get allTask</h3>
        {taskList.length>0 && taskList.map(ele=><p key={ele._id}>{ele.title}</p>)}
        {/* {taskList && <p>{taskList.quote}</p>} */}
        </>
    )
}

export default GetAllTask
