import React from 'react';

import './App.css';
import CompReducer from './components/CompReducer';
import CompRedux from './components/CompRedux';



function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>

    <CompReducer/>
    <CompRedux/>
    </>
  );
}

export default App;
