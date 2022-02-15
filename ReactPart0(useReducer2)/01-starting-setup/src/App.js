import React from 'react'
import CountOneReducer from './CountOneReducer'
import CountOneReducer2 from './CountOneReducer2'
import CountOneState from './CountOneState'
import CountOneStateObjects from './CountOneStateObjects';
import FullNameState from './FullNameState';
import FullNameStateObj from './FullNameStateObject';
import FullNameRef from './FullNameRef';
import FullNameReduce from './FullNameReduce';
import FullNameReduce2 from './FullNameReduce2';
function App() {
  return (
    <div className="App">
      <h1>Hello , lets learn about useReducer</h1>
      <CountOneReducer2 />
      <CountOneReducer />
      <CountOneState />
      <CountOneStateObjects />
      <FullNameState/>
      <FullNameStateObj/>
      <FullNameRef></FullNameRef>
      <FullNameReduce></FullNameReduce>
      <FullNameReduce2></FullNameReduce2>
    </div>
  );
}

export default App;