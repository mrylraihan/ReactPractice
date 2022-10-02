import React from 'react';

import './App.css';
import TestRedux from './components/TestRedux';
import TestResult from './components/TestResult';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <TestRedux/>
    <TestResult/>
    </>
  );
}

export default App;
