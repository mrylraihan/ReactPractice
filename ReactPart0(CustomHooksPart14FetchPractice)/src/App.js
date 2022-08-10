import React from 'react';

import './App.css';
import TestHook from './components/TestHook';
import TestHook2 from './components/TestHook2';
import TestNoHook from './components/TestNoHook.jsx'


function App() {
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <TestHook/>
      <TestHook2/>
      <TestNoHook/>
    </div>
  );
}

export default App;
