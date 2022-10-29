import React from 'react';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {useSelector} from 'react-redux'

function App() {
  const user = useSelector(state=>state.loginData.loginInfo)
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    {!user && <Login/>}
    {user && <Home/>}
    </>
  );
}

export default App;
