import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <div className="app">
        <h1>Hi there!</h1>
        <Navbar />
      </div>
      <Routes>
        <Route path={'/home'} element={<Home />}/>
        <Route path={'/createOne'} element={<CreateOne setAllPost={setAllPost} />}/>
        <Route path={'/seeAll'} element={<SeeAll allPost={allPost} setAllPost={setAllPost} />}/>
        <Route path={'/findOne'} element={<FindOne />}/>
        <Route path={'/seeAll/:id'} element={<UseParamsComp list={allPost}/>}/>

      </Routes>
    </Router>
  );
}

export default App;
