import React from 'react';
import { useState } from 'react';

import './App.css';
import Test from './components/Test';


function App() {
  const [fullname, setFName] = useState('')
  const person = { name: 'wallie', age: 30, setFName }
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <h2>{fullname}</h2>
      <Test {...person} />
    </div>
  );
}

export default App;
