import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About';
import Add from './components/Pages/Add';
import AllPage from './components/Pages/AllPage';
import GetById from './components/Pages/GetById';
import Home from './components/Pages/Home';
import Single from './components/Pages/Single';



function App() {
  const [list, setList] = useState('')
  
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
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/all' element={<AllPage list={list}/>} />
          <Route path='/all/:id' element={<Single list={list}/>} />
          <Route path='/add' element={<Add setList={setList} />} />
        <Route path='/getByID' element={<GetById list={list} />} />
        </Routes>
    </Router>
  );
}

export default App;
