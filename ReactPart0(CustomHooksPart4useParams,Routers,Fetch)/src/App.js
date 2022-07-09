import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import TestHook1 from './components/TestHook1';
import TestHook2 from './components/TestHook2';


function App() {
  return (
    <>
    <Router>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <Routes>
          <Route path='/' element={<TestHook1 />}/>
          <Route path='/:id' element={<TestHook2 />}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
