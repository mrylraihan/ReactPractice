import React from 'react';
import './App.css';
import FetchingAll from './components/FETCH/FetchingAll';
import FetchingFirst from './components/FETCH/FetchingFirst';
import FetchingOne from './components/FETCH/FetchingOne';

function App() {
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <FetchingAll/>
      <FetchingFirst/>
      <FetchingOne/>
    </div>
  );
}

export default App;
