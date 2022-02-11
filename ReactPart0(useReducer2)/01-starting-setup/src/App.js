import React from 'react'
import CountOneReducer from './CountOneReducer'
import CountOneState from './CountOneState'
import CountOneStateObjects from './CountOneStateObjects';
function App() {
  return (
    <div className="App">
      <h1>Hello , lets learn about useReducer</h1>
      <CountOneReducer />
      <CountOneState />
      <CountOneStateObjects />
    </div>
  );
}

export default App;