import React, { useEffect, useState } from 'react';

import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

const DUMMYUSER = {
  userName:"Wallie001",
  passWord: "Wallie001"
} 
function App() {
  const [user, setUser] = useState('')
  const [isLoggedIN, setIsLoggedIn] = useState(false)
  useEffect(()=>{
    if(DUMMYUSER.userName == user.userName && DUMMYUSER.passWord == user.passWord){
    
      setIsLoggedIn(true)
    }else{
   
    }
  }, [user])
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {!isLoggedIN && <LoginPage setUser={setUser}/>}
      {isLoggedIN && <HomePage userName={user.userName} logOut={setIsLoggedIn}/>}
    
    </div>
  );
}

export default App;
