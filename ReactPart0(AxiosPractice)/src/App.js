import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/navbar/Nav';
import GetAll from './components/pages/GetAll';
import Home from './components/pages/Home';
import SeeOne from './components/pages/SeeOne';
import About from './components/pages/About';
import Extras from './components/pages/Extras';
import CreateOne from './components/pages/CreateOne';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(result => result.data)
      .then(res => setData(res))
      .catch(console.error)
  }, [])

  console.log(data);
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path={`/`} element={<Home/>} />
        <Route path={`/getAll`} element={<GetAll data={data}/>} />
        <Route path={`/getAll/:id`} element={<SeeOne data={data} setData={setData}/>} />
        <Route path={`/create`} element={<CreateOne data={data} setData={setData}/>} />
        <Route path={`/about`} element={<About/>} />
        <Route path={`/extras`} element={<Extras/>} />
      </Routes>
    </Router>
  );
}

export default App;
