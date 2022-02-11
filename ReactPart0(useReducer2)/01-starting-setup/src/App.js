import React from 'react'
import CountOneReducer from './CountOneReducer'
import CountOneState from './CountOneState'
import CountOneStateObjects from './CountOneStateObjects';
import FullNameState from './FullNameState';
import FullNameRef from './FullNameRef';
import FullNameReduce from './FullNameReduce';
import FullNameReduce2 from './FullNameReduce2';
function App() {
  return (
    <div className="App">
      <h1>Hello , lets learn about useReducer</h1>
      <CountOneReducer />
      <CountOneState />
      <CountOneStateObjects />
      <FullNameState/>
      <FullNameRef></FullNameRef>
      <FullNameReduce></FullNameReduce>
      <FullNameReduce2></FullNameReduce2>
    </div>
  );
}

export default App;