import React from 'react';
import './App.css';
import FetchAll from './components/FetchAll';
import FetchAllWithHook from './components/FetchAllWithHook';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
      <FetchAll/>
    </div>
    <div className='app'>
      <FetchAllWithHook />
    </div>
    </>
  );
}

export default App;
