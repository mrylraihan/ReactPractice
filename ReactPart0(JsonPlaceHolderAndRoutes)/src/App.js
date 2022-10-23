import React, { useState } from 'react';

import './App.css';
import Navbar from './components/nav/Navbar';
import CreateOne from './components/pages/CreateOne';
import FindOne from './components/pages/FindOne';
import Home from './components/pages/Home';
import SeeAll from './components/pages/SeeAll';
import UseParamsComp from './components/pages/UseParamsComp';


function App() {
  const [allPost, setAllPost] = useState([])
  return (
    <>
      <div className="app">
        <h1>Hi there!</h1>
        <Navbar />
      </div>
      <Home />
      <FindOne />
      <CreateOne setAllPost={setAllPost} />
      <SeeAll allPost={allPost} setAllPost={setAllPost}/>
      <UseParamsComp />
    </>
  );
}

export default App;
