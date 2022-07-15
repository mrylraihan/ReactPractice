import React from 'react';

import './App.css';
import GetAllData from './components/GetAllData';
import PostData from './components/PostData';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
      <GetAllData/>
    </div>
    <div className='app'>
      <PostData></PostData>
    </div>
    </>
  );
}

export default App;
