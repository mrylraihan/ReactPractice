import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import classes from '../Login/Login.module.css';
import Button from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateEvent = (props) => {
    const [task, setTask] = useState({name:'', date:''})
    const [newTask, setNewTask] = useState({})
    const nav = useNavigate()
    

  


    const submitHandler = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:4000/events/`, {
            event:{
                name:task.name,
                scheduled:new Date(task.date)
            }
        },
        {
            headers: {
                Authorization: `Bearer ${props.user.token}`
            }
        }).then(result=>result.data)
        .then(res=>{
            setNewTask(res)
            console.log(res);
        }).catch(err=>console.log(err))
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={task.name}
                        onChange={e=>setTask(prev=>{return{...prev, name:e.target.value}})}
                    />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        value={task.date}
                        onChange={e => setTask(prev => { return { ...prev, date: e.target.value } })}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        create event
                    </Button>
                </div>
            </form>
            <div>{newTask.name && <h2>{newTask.name} was created Succeffully</h2>}</div>
        </Card>
    );
};

export default CreateEvent;
