import React, { useState } from 'react';

import './App.css';
import Level1 from './components/PropsChaining/Level1';
import Level1C from './components/ContextExample/Level1C';
import ContextFile from './contextStore/context-file';
import Level1R from './components/ReduxExample/Level1R';


function App() {
  const [quote , setQuote] = useState('')
  const [cQuote, setCQuote] = useState('')
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    {/* Props Chaining Example */}
    <Level1 quote={quote} setQuote={setQuote}/>
    {/* How to pass state through context */}
      <ContextFile.Provider value={{ cQuote: cQuote, setCQuote: setCQuote }}>
      <Level1C/>
      </ContextFile.Provider>
    {/* how to manage state with redux */}
    <Level1R/>
    </>
  );
}

export default App;
