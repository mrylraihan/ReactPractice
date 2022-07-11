import React from 'react';

import './App.css';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';


function App() {
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Test1/>
      <Test3/>
      <Test2/>
    </div>
  );
}

export default App;
