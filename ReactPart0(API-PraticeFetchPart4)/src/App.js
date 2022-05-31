import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar.jsx'
import GetAll from './components/GetAll.jsx'
import GetAllAxios from './components/GetAllAxios'
import GetOneByID from './components/GetOneByID'
import CreatePost from './components/CreatePostAxios.jsx';
import './App.css';
import CreatePostAxios from './components/CreatePostAxios.jsx';

function App() {
  return (
    <Router>

    <div className="app">
      <h1>Hi there!</h1>
      <Navbar></Navbar>
      <Routes>
        <Route path='/GetAllFetch' element={<GetAll />}/>
          <Route path='/GetAllAxios' element={<GetAllAxios />}/>
          <Route path='/GetOneById' element={<GetOneByID />}/>
          <Route path='/CreatePostAxios' element={<CreatePostAxios />}/>
          <Route path='/CreatePost' element={<CreatePost />}/>
      </Routes>
     
      
    </div>
    </Router>
  );
}

export default App;
