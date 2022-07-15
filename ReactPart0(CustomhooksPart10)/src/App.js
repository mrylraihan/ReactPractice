import React from 'react';
import GetUrl from './components/GetUrl.jsx'
import GetUrlWithHook from './components/GetUrlWithHook.jsx'
import './App.css';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <div className="app">
        <GetUrl/>
    </div>
    <div className="app">
        <GetUrlWithHook/>
    </div>
    
    </>
  );
}

export default App;
