import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About';
import CreateOne from './components/Pages/CreateOne';
import Home from './components/Pages/Home';
import Main from './components/Pages/Main';
import SingleItem from './components/Pages/SingleItem';
import useFetch from './hooks/use-fetch';


function App() {
  const [data, setData] = useFetch('')
  
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(res => res.json())
  //     .then(setData)
  //     .catch(console.error)
  // }, [])

  return (
    <Router>
    <div className="app">
      <h1>Hi there!</h1>
      <Navbar/>
    </div>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/home' element={<Home data={data} setData={setData}/>}/>
        <Route path='/home/:id' element={<SingleItem data={data} setData={setData}/>}/>
        <Route path='/create' element={<CreateOne setData={setData} length={data.length}/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </Router>
  );
}

export default App;
