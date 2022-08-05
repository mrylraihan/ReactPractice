import React, { useState } from 'react';

import './App.css';
import Test1 from './components/Test1';


function App() {
  const [fullName, setFullName] = useState('')
  return (
    <div className="app">
      <p>{fullName}</p>
      <Test1 fullName={fullName} setFullName={setFullName}/>
      <button onClick={()=>setFullName('')}>delete name</button>
    </div>
  );
}

export default App;
