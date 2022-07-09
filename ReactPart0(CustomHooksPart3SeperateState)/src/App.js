import React, { useState } from 'react';

import './App.css';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import useApi from './hooks/use-api';


function App() {
  //this is an example of how you can multiple components can use the custom hook 
  // and they dont share the state in the custom hook, each component get it own instance of the hook
  const [url, setUrl] = useState('')
  const result = useApi(url)

  console.log(result);
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>

      <button onClick={() =>setUrl('https://api.kanye.rest')}>show me Results</button>
      {result && <h4>{result.quote}</h4>}
    </div>
    <Test1/>
    <Test2/>
    </>
  );
}

export default App;
