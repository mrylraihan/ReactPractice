import React from 'react';
import './App.css';
import UpdatingArrays from './components/UpdatingArrays';
import UpdatingBoolean from './components/UpdatingBools';
import UpdatingObjs from './components/UpdatingObjs';
import UpdatingStrings from './components/UpdatingStrings';

function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <div className="app">
      <UpdatingStrings/>
    </div>
    
    <div className="app">
        <UpdatingBoolean/>
    </div>
    
    
    <div className="app">
        <UpdatingObjs/>
    </div>
    
    
    <div className="app">
        <UpdatingArrays/>
    </div>
    
    </>
  );
}

export default App;
