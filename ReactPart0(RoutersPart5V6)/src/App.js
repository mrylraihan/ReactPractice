import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About';
import Add from './components/Pages/Add';
import AllPage from './components/Pages/AllPage';
import Home from './components/Pages/Home';
import Single from './components/Pages/Single';


const peopleList = [
  {name:'Wallie', id:0},
  {name:'Heshow', id:1},
  {name:'Meshia', id:2},
]
function App() {
  const [list, setList] = useState(peopleList)
  return (
    <Router>
      <div className="app">
        <h1>Hi there!</h1>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/all' element={<AllPage list={list}/>} />
          <Route path='/all/:id' element={<Single list={list} />} />
          <Route path='/add' element={<Add setList={setList} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
