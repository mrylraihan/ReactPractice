import React from 'react';
import { useContext } from 'react';

import './App.css';
import SecondLevel from './components/SecondLevel';
import ContextTest from './store/context-file';

function App() {
  const ctxBasic = useContext(ContextTest)
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
      {/* this is our basic context being used with its default value*/}
      <h3>result of basic context : {ctxBasic.result}</h3>
    </div>
    <div>
      <SecondLevel />
    </div>
    </>
  );
}

export default App;
