import React, { useEffect, useState } from 'react';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  // create state in main app for isLoggedin
  const [isLoggedin, setIsLoggedIn] = useState(false)
  useEffect(()=>{
    const storedUserLoggedInfo = localStorage.getItem('isLoggedIn')
    if(storedUserLoggedInfo === '1'){
      setIsLoggedIn(true)
    }
  },[])

  const loginHandler = (email, password)=>{
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  }

  const logoutHandler = ()=>{
    localStorage.clear();
    setIsLoggedIn(false);
  }

  return (
    <div className="app">
      {!isLoggedin && <Login onLogin={loginHandler}/>}
      {isLoggedin && <Home onLogOut={logoutHandler}/>}
    </div>
  );
}

export default App;
