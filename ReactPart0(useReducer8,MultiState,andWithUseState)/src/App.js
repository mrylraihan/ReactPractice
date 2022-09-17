import React from 'react';

import './App.css';
import FullNameUseReducer from './components/FullNameUseReducer';
import FullNameUseState from './components/FullNameUseState';


function App() {
  return (
   <>
   <div className="app">
      <h1>Hi there!</h1>
    </div>
    <div className='app'>
      <FullNameUseState/>
    </div>
    <div className='app'>
      <FullNameUseReducer/>
    </div>
   </>
  );
}

export default App;
