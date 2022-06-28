import React from 'react';

import './App.css';
import TestFetchClass from './components/TestFetchClass';
import TestFetchFunction from './components/TestFetchFunction';

function App() {
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <TestFetchClass />
      <TestFetchFunction />
    </div>
  );
}

export default App;
