import React from 'react';

import './App.css';
import CompRedux from './components/CompRedux';
import CompUseReducer from './components/CompUseReducer';
import CompUseState from './components/CompUseState';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <CompUseReducer/>
    <CompRedux/>
    <CompUseState/>
    </>
  );
}

export default App;
