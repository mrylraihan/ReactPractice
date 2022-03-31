import React from 'react'
import CountOneObj from './CountOneObj';
import CountOneReducer from './CountOneReducer'
import CountOneReducerIf from './CountOneReducerIf'
import FullNameReducer from './FullNameReducer';

function App() {
  return (
    <div className="App">
      <h1>Hello , lets learn about useReducer</h1>
      <CountOneReducer />
      <CountOneReducerIf />
      <FullNameReducer/>
      <CountOneObj/>
    </div>
  );
}

export default App;