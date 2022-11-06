import React, { useEffect, useState } from 'react';

import './App.css';
import AddOne from './components/AddOne';
import ShowAll from './components/ShowAll';


function App() {
  const [allPost, setAllPost] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(setAllPost)
    .catch(console.error)
  },[])
  // console.log('App',allPost);
  return (
    <>
      <div className="app">
        <h1>Hi there!</h1>
      </div>
      <AddOne setAllPost={setAllPost} list={allPost}/>
      <ShowAll allPost={allPost}/>
    </>
  );
}

export default App;
