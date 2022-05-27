import React, { useState } from "react";
import Navbar from './components/NavBar/Navbar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About.jsx'
import Extras from './components/Pages/Extras.jsx'
import Details from './components/Pages/Details.jsx'



const peopleArray = [
  {id:1, name:'Meshia'},
  {id:2, name:'Heshow'},
  {id:3, name:'Wallie'}
]
function App() {
 const [list, setList] = useState(peopleArray)
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/extras' element={<Extras/>}/>
          <Route path='/home/' element={<Home peopleArray={list}/>}>
            <Route path=':userID' element={<Details peopleArray={list}/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
