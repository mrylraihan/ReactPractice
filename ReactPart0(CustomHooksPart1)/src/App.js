import React from 'react';

import './App.css';
import useApi from './hooks/use-api';


function App() {
  const [result, setUrl] = useApi()
  console.log(result);
  return (
    <div className="app">
      <h1>Hi there!</h1>

      <button onClick={() => setUrl('https://api.kanye.rest')}>show me Results</button>
      {result && <h4>{result.quote}</h4>}
    </div>
  );
}

export default App;
