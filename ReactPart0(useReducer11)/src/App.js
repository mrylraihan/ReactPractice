import React from 'react';

import './App.css';
import TestReducers from './components/TestReducers';
import TestReducersCleaner from './components/TestReducersCleaner';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <TestReducers/>
    <TestReducersCleaner/>
    </>
  );
}

export default App;
