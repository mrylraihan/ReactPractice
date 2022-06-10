import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import GetAllNotes from './components/GetAllNotes';
import ShowById from './components/ShowById';
import CreateNote from './components/CreateNote';
import GetByName from './components/GetByName';

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Hi there!</h1>
        <Navbar />
      </div >
      <Routes>
        <Route path='/allnotes' element={<GetAllNotes />} />
        <Route path='/allnotes/:id' element={<ShowById />} />
        <Route path='/makenote' element={<CreateNote />} />
        <Route path='/notebyname' element={<GetByName />} />
      </Routes>
    </Router>
  );
}

export default App;
