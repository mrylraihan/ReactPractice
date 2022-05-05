import React, { useState } from 'react';

import './App.css';
import DisplayItems from './components/DisplayItems';

const DUMMYDATA = [
  {id:0, task:'do Laundry'},
  {id:1, task:'Cooking'},
  {id:2, task:'Workout'},
  {id:3, task:'Study React and Js'},
] 
function App() {
  const [list, setList] = useState(DUMMYDATA)
  const [newTask , setTask] = useState('')
  
  const submitHandler = ()=>{
    setList(prev=>{
      return [...prev, {id:list.length+1, task:newTask}]
    })
  }
  
  const deleteTaskHandler = (id)=>{
    const filteredList = list.filter(task => task.id !== id)
    // setList(prev=>{
    //   const filteredList = prev.filter(task=> task.id !== id)
    //   return filteredList
    // })
    setList(filteredList)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <div>
        <label>Lets create a task! :
          <input type='text' placeholder='type here' value={newTask} onChange={e=>setTask(e.target.value)} />
          <button onClick={submitHandler}>Submit a task</button>
        </label>
      </div>
      <DisplayItems list={list} deleteTask={deleteTaskHandler}/>
    </div>
  );
}

export default App;
