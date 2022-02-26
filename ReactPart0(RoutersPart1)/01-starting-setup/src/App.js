import React from "react";
import Navbar from './components/NavBar/Navbar.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About.jsx'
import Extras from './components/Pages/Extras.jsx'



function App() {

  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/home'>
            <Home/>
            </Route>
          <Route path='/about'>
            <About/>
            </Route>
          <Route path='/extras'>
            <Extras/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
