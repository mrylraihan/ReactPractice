import React, { useState } from 'react';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  const [user, setUser] = useState('')
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
      {!user && <Login setUser={setUser}/>}
      {user && <Home setUser={setUser}/>}
    </>
  );
}

export default App;
