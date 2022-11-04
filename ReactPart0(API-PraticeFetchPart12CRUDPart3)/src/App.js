import React, { useEffect, useState } from 'react';

import './App.css';
import AddOne from './components/AddOne';
import DeleteOne from './components/DeleteOne';
import ShowAll from './components/ShowAll';
import ShowOne from './components/ShowOne';


function App() {
  const [postList, setPostList] = useState([])
  const [post, setPost] = useState('')

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(setPostList)
    .catch(console.error)
  },[])
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <ShowOne/>
      <AddOne setPost={setPost} list={postList} post={post} setList={setPostList} />
    <DeleteOne/>
      <ShowAll list={postList}/>
    </>
  );
}

export default App;
