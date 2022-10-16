import React, { useState, useEffect } from 'react'


function GetAll() {
const [allUsers, setUsers] = useState([])

useEffect(()=>{
    fetch('http://localhost:4000/user/')
    .then(res=>res.json())
    .then(setUsers)
    .catch(console.error)
},[])
console.log(allUsers);
let content = allUsers.map((ele,idx)=><li key={idx}>{ele.name}</li>)
return (
    <div className='app'>
          <h2>Get All Task</h2>
    <ul>
        {content}
    </ul>
    </div>

  )
}

export default GetAll