import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UseEffectExample from './components/UseEffectExample.jsx'
import SinglePost from './components/SinglePost.jsx'
import './App.css';

function App() {
  return (
      <Router>
    <div className="app">
      <h1>Hi there!</h1>
      <Routes>
        <Route path='/' element={<UseEffectExample/>}/>  
        <Route path='/:postId' element={<SinglePost/>}/>  
      </Routes>    
    </div>
      </Router>
  );
}

export default App;
