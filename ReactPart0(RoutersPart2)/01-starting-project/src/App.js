import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Home from './components/Home';
import About from './components/About';

function App() {


  return (
    <div>

     <Router>
     <Navbar/>
      <Switch>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
