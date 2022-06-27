import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../UI/Card/Card';
import classes from '../Home/Home.module.css';

const Home = (props) => {
    const [allTask, setAllTask] = useState([])
  

    useEffect(() => {
        if (localStorage.getItem('token')) {
            axios.get(`http://localhost:4000/events/all-events`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(result => result.data)
                .then(data => {
                    console.log(data);
                    setAllTask(data)
                })
                .catch(err => console.log(err))
        }
    }, [props.user])
    return (
        <Card className={classes.home}>
            <h1>Welcome back!</h1>
            {allTask.map(ele => <h3 key={ele._id}>{ele.name} : {ele.owner.email}</h3>)}
        </Card>
    );
};

export default Home;
