import React from 'react';
import TestHook1 from './components/TestHook1.jsx'
import TestHook2 from './components/TestHook2.jsx'
import './App.css';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <TestHook1></TestHook1>
    <TestHook2></TestHook2>
    </>
  );
}

export default App;
