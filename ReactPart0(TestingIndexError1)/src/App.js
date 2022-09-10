import React, { useEffect, useState } from 'react';
import './App.css';

import Test1 from './components/Test1';


function App() {
  const [list , setList] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(setList)
    .catch(console.error)
  },[])
  console.log(list);
  return (
    <div className='app'>
      <h1>Hey there</h1>
      <Test1 list={list}></Test1>
    </div>
  );
}

export default App;
