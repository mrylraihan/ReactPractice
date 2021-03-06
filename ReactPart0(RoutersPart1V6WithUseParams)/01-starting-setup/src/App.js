import React from "react";
import Navbar from './components/NavBar/Navbar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About.jsx'
import Extras from './components/Pages/Extras.jsx'
import Details from './components/Pages/Details.jsx'



function App() {

const peopleArray = [
  {id:1, name:'Meshia'},
  {id:2, name:'Heshow'},
  {id:3, name:'Wallie'}
]
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/extras' element={<Extras/>}/>
          <Route path='/home' element={<Home peopleArray={peopleArray}/>}/>
          <Route path='/home/:userID' element={<Details peopleArray={peopleArray}/>}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
