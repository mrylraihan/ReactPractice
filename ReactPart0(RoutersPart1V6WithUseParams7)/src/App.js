import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import RenderList from './components/RenderList';
import SinglePost from './components/SinglePost';
import Test1 from './components/Test1';

const DummyArray = [
  {task:'laundry'},
  {task:'cook'},
  {task:'home work'},
]
function App() {
  const [list , setList] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(setList)
    .catch(console.error)
  },[])
  return (
    <Router>
    <div className="app">
      <h1>Hi there!</h1>
      <Navbar />
    </div>
    <Routes>
        <Route path={'/home'} element={<Test1 />}/>
        <Route path={'/renderlist'} element={<RenderList list={list} />}/>
        <Route path={'/renderlist/:cat'} element={<SinglePost list={list} />}/>
    
    </Routes>
    </Router>
  );
}

export default App;
