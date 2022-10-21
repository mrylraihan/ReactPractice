import React, { useState } from 'react';
import './App.css';
import FetchComp from './components/FetchComp';
import FetchCompWithCustomeHook from './components/FetchCompWithCustomeHook';
import ListResultComp from './components/ListResultComp';


function App() {
  const [listResults, setListResults] = useState([])
  return (
    <>
    <div className="app">
      <p>click the button and see what else Kanye says</p>
    </div>
      <FetchComp addToList={setListResults}/>
      <ListResultComp list={listResults}/>
      <FetchCompWithCustomeHook addToList={setListResults} />
    </>
  );
}

export default App;
