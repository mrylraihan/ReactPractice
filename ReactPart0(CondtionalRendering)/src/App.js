import React from 'react';
import './App.css';
import ConditionalRenderingArray from './components/ConditionalRenderingArray';
import ConditionalRenderStrings from './components/ConditionalRenderStrings';
import TestingUseEffect from './components/TestingUseEffect';
import TestingUseEffect2 from './components/TestingUseEffect2';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1> 
    </div>
      <ConditionalRenderStrings />
      <ConditionalRenderingArray/>
      <TestingUseEffect/>
      <TestingUseEffect2/>
    </>
  );
}

export default App;
