import React, { useState } from 'react';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState({
    email: '',
    name: '',
    password: ''
  })
  const [isTrue, setIsTrue] = useState(false)
  return (
    <div>
      <h1>Forms With useState() and Routers+Redirects</h1>
      <Router>
        <Routes>
          <Route path='/'
            element={
              <SignUp getUser={setUser} setIsTrue={setIsTrue} isTrue={isTrue} />
            } />
          <Route path='/Home'
            element={
              <Home user={user} setIsTrue={setIsTrue} isTrue={isTrue} />
            } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
