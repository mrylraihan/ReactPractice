import React from 'react'
import './App.css';
import ReducerCount from './components/ReducerCount';
import ReducerFullName from './components/ReducerFullName';

function App() {
  return (
    <div className="App">
      <h1>hello im working!</h1>
      <ReducerCount/>
      <ReducerFullName />
    </div>
  );
}

export default App;
