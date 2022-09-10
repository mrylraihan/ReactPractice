import React, { useEffect, useState } from 'react';

import './App.css';


function App() {
  const [list, setList] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(setList)
      .catch(console.error)
  }, [])
  console.log(list);
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
    </div>
  );
}

export default App;
