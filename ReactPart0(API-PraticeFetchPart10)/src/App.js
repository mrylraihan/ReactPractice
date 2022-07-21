import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import FindOne from './components/pages/FindOne';
import ShowAll from './components/pages/ShowAll';
import ShowOne from './components/pages/ShowOne';
import CreateOne from './components/pages/CreateOne';


function App() {
  const [data, setData] = useState([])
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(result => setData(result))
      .catch(console.error)
  },[])
  return (
    <>
    <Router>

    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <Navbar/>
    <Routes>
      <Route path='/showAll' element={<ShowAll listOfData={data}/>}/>
      <Route path='/showOne/:id' element={<ShowOne/>}/>
      <Route path='/findOne' element={<FindOne/>}/>
      <Route path='/createOne' element={<CreateOne setData={setData} data={data}/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
