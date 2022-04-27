import React, { useState } from 'react';
import SignUp from './components/SignUp';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState({
    email:'',
    name:'',
    password:''
  })
  const [isTrue, setIsTrue] = useState(false)
  return (
    <div>
      <h1>Forms With useState() and Routers+Redirects</h1>
      <Router>
        <Switch>
          <Route exact path='/'>
            <SignUp getUser={setUser} setIsTrue={setIsTrue} isTrue={isTrue}/>
          </Route>
          <Route exact path='/Home'>
            <Home user={user} setIsTrue={setIsTrue} isTrue={isTrue}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
