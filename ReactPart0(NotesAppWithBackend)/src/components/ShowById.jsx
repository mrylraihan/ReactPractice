import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ShowById = () => {
    const [note ,setNote] = useState({})
    const nav = useNavigate()
    const params = useParams()
    const id = params.id

    useEffect(()=>{
        axios.get(`http://localhost:3001/notes/${id}`)
            .then(result => result.data)
            .then(result => setNote(result))
            .catch(err => console.log(err))
    }, [id])

    const deleteHandler = (id)=>{
        axios.delete(`http://localhost:3001/notes/${id}`)
            .then(result => result.data)
            .then(result => {
                console.log(result)
                nav(-1)
            })
            .catch(err => console.log(err))

        
    }
    return (
        <div className='app'>
        <div className='app'>
            <h1>{note.title}</h1>
            <h2>{note.body}</h2>
            <button onClick={deleteHandler.bind(this,note._id)}>Delete Note</button>
        </div>
        <button onClick={()=>nav(-1)}>Go Back to te rest of your list</button>
        </div>
    )
}

export default ShowById