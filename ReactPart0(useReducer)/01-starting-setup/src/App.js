import React from 'react'
import CountOneReducer from './CountOneReducer'
import CountOneState from './CountOneState'
function App() {
  return (
    <div className="App">
      <h1>Hello , lets learn about useReducer</h1>
      <CountOneReducer />
      <CountOneState />
    </div>
  );
}

export default App;