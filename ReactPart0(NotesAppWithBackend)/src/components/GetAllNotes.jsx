import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const GetAllNotes = () => {
    const [allNotes, setAllNotes] = useState([])
    const nav = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3001/notes')
        .then(result=>result.data)
        .then(result=>setAllNotes(result))
        .catch(err=>console.log(err))
    }, [])
    return (
        <div>
            <div className='app'>
            <h1>All Notes</h1>
            <ul>
                {allNotes.map(ele=>{
                    return <div
                        onClick={()=> nav(`/allnotes/${ele._id}`)}
                    ><li key={ele._id}>{ele.title}</li></div>
                })}
            </ul>
                </div>
        </div>
    )
}

export default GetAllNotes