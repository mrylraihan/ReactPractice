import React, {useState} from "react";
import Navbar from './components/NavBar/Navbar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About.jsx'
import Extras from './components/Pages/Extras.jsx'
import Login from "./components/Pages/Login.jsx";
import Login2 from "./components/Pages/Login2.jsx";



function App() {
  const [user, setUser] = useState(false)
  return (
    <Router>
      <>
        <h1>Hey lets Practice Routers</h1>
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home user={user}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/extras' element={<Extras/>}/>
          <Route path='/Login' element={<Login user={user} setUser={setUser}/>}/>
          <Route path='/Login2' element={<Login2 user={user} setUser={setUser}/>}/>
        </Routes>
      </div>
      </>
    </Router>
  );
}


export default App;
