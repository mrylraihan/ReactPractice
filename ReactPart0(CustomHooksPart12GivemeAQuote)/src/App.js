import React from 'react';
import './App.css';
import ShowMeQuote from './components/ShowMeQuote';
import ShowMeQuoteCustomHook from './components/ShowMeQuoteCustomHook';


function App() {
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <u><h2>with out custom hooks</h2></u>
      <ShowMeQuote/>
      <h2><u>with Custom Hooks</u></h2>
      <ShowMeQuoteCustomHook/>
    </div>
  );
}

export default App;
