import React, { useState, useEffect } from 'react';
import {BrowserRouter as Routers, Routes,Route} from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import SeeAll from './components/Pages/SeeAll';
import CreatePost from './components/Pages/CreatePost'
import About from './components/Pages/About'
import Extras from './components/Pages/Extra'
import Single from './components/Pages/SeeSinglePost'



function App() {
  const [dataList , setDataList] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.data)
    .then(setDataList)
    .catch(console.error)
  },[])
  console.log(dataList);// just to see our data and if its working

  return (
    <>
    <Routers>
    <div className="app">
    <Navbar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/SeeAll' element={<SeeAll data={dataList}/>}/>
          <Route path='/SeeAll/:id' element={<Single data={dataList} setData={setDataList}/>}/>
      <Route path='/Create' element={<CreatePost setData={setDataList} data={dataList}/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Extra' element={<Extras/>}/>
    </Routes>
    </Routers>
    </>
  );
}

export default App;
