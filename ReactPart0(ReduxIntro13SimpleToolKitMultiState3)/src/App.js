import React from 'react';

import './App.css';
import TestCustomHook from './components/TestCustomHook';
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
    <TestCustomHook/>
    </>
  );
}

export default App;
