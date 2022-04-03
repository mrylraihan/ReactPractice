import React, { useState } from "react";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
// import {Route, Routes} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 


function App() {
  const [user, setUser] = useState({
    email: '',
    name: '',
    password: ''
  })
  const [isTrue, setIsTrue] = useState(false)
  return (
    <div>
      <h1>Forms with useState() Hook</h1>
   
    <Router>
      <Switch>
        <Route exact path='/'>
            <SignUp getUser={setUser} setIsTrue={setIsTrue} isTrue={isTrue}/>
        </Route>
          <Route path="/Home">
            <Home user={user} setIsTrue={setIsTrue} isTrue={isTrue}/>
            </Route>
      </Switch>
    </Router>
    </div>
  );
}
// or you can do it like this 
// const App = ()=>  (
//     <div>
//       <h2>Let's get started!</h2>
//     </div>
//   );

export default App;
