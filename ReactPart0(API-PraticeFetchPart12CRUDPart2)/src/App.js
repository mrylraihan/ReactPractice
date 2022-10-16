import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import AddUser from './components/AddUser';
import GetAll from './components/GetAll';


function App() {
  return (
    <Router>
    <div className="app">
      <h1>Hi there!</h1>
      <ul>
        <Link to={'/getall'}><li>Get all</li></Link>
        <Link to={'/adduser'}><li>Add User</li></Link>
      </ul>
    </div>
    <Routes>
        <Route path='/getall' element={<GetAll />}/>
        <Route path='/adduser' element={<AddUser />}/>
      <Route/>
    </Routes>
    </Router>
  );
}

export default App;
