import React from 'react';

import './App.css';
import CompReducer from './components/CompReducer';
import CompRedux from './components/CompRedux';
import CompUseState from './components/CompUseState';
import CompUseStateObj from './components/CompUseStateObj';


function App() {
  return (
    <>
      <div className="app">
        <h1>Hi there!</h1>
      </div>
      <CompUseState />
      <CompUseStateObj />
      <CompReducer />
      <CompRedux />
    </>
  );
}

export default App;
