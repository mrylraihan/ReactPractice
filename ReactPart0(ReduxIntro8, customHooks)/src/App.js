import React from 'react';
import './App.css';
import ReduxTest from './components/ReduxTest';
import TestCustomHook from './components/TestCustomHook';
import TestShow from './components/TestShow';


function App() {
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <ReduxTest/>
      <TestShow/>
      <TestCustomHook/>
    </div>
  );
}

export default App;
