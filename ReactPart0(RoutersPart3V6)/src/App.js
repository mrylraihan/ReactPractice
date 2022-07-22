import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/pages/About';
import Extras from './components/pages/Extras';
import Home from './components/pages/Home';
import Numbers from './components/pages/Numbers';


function App() {
  return (
    <Router>
    <div className="app">
      <h1>Hi there!</h1>
      <Navbar />
    </div>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/extras' element={<Extras/>}>  
      <Route path='/extras/:num' element={<Numbers/>}/>
      </Route>
    </Routes>
    </Router>
  );
}

export default App;
