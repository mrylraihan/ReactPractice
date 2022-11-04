import React, { useEffect, useState } from 'react';

import './App.css';
import AddPerson from './components/AddPerson';
import ShowAll from './components/ShowAll';


function App() {
  const [list, setList] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(setList)
      .catch(console.error);
  },[])
  const addPost = (post)=>{
    setList(prev=>{
      return [...prev, post]
    })
  }
    const removePost = (post)=>{
      setList(list.filter(ele=>ele.id !== post.id))
    }
  console.log(list);
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
      <ShowAll list={list} remove={removePost}/>
      <AddPerson add={addPost} list={list}/>
    </>
  );
}

export default App;
