import React from "react";
import Navbar from './components/NavBar/Navbar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About.jsx'
import Extras from './components/Pages/Extras.jsx'



function App() {

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/extras' element={<Extras/>}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
