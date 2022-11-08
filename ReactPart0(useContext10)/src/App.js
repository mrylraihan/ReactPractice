import React, { useState } from 'react';

import './App.css';
import GetData from './components/GetData';
import ShowData from './components/ShowData';
import FetchContext from './store/fetch-data';


function App() {
  const [result, setResult] = useState('')

  const getResult = () =>{
    fetch('https://api.kanye.rest')
    .then(res=>res.json())
    .then(setResult)
    .catch(console.error)
  }

  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
      <FetchContext.Provider value={{ data: result, getResult }}>
    <GetData/>
    <ShowData/>
      </FetchContext.Provider>
    </>
  );
}

export default App;
