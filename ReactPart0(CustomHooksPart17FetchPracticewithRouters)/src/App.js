import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TestHook1 from './components/TestHook1.jsx'
import TestHook2 from './components/TestHook2.jsx'
import './App.css';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';


function App() {
  return (
    <Router>
    <div className="app">
      <h1>Hi there!</h1>
      <NavBar/>
    </div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/k' element={<TestHook1/>}/>
        <Route path='/j' element={<TestHook2/>}/>
    </Routes>
    </Router>
  );
}

export default App;
