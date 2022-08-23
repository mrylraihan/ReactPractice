import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../UI/Card/Card'
import classes from './SingleItem.module.css'

const SingleItem = (props) => {
    const params = useParams()
    const id = params.id
    const [task, setTask] = useState({})
    const nav = useNavigate()
   
    useEffect(()=>{
        axios.get(`http://localhost:4000/events/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(result => result.data)
            .then(data => {
                console.log(data);
                setTask(data)
            })
            .catch(err => console.log(err))
    }, [props.user, id])

    const deleteHandler=()=>{
        axios.delete(`http://localhost:4000/events/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(result => result.data)
            .then(data => {
                console.log(data);
                nav(-1)
            })
            .catch(err => console.log(err))

    }
    return (
        <Card className={classes.single}>
            <h2>Single Event</h2>
            <h3>{task.name}</h3>
            <button onClick={deleteHandler}>Delete Event</button>
            <button onClick={()=>nav(-1)}>Go back to all</button>
        </Card>
    )
}

export default SingleItem