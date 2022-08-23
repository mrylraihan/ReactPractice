import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const [allTask, setAllTask] = useState([])
  const nav = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('token')){
      axios.get(`http://localhost:4000/events/`, {
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(result=>result.data)
      .then(data=>{
        console.log(data);
        setAllTask(data)
      })
      .catch(err=>console.log(err))
    }
  },[props.user])
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      {allTask.map(ele=><h3 key={ele._id}>{ele.name} <button onClick={()=>nav(`/${ele._id}`)}>see more</button></h3>)}
    </Card>
  );
};

export default Home;
