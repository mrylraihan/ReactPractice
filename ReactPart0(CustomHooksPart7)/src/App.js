import React from 'react';
import useFetch from './hooks/use-fetch';
import './App.css';


function App() {
  const [fetchData, setUrl] = useFetch()
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <button onClick={setUrl.bind(this, 'https://jsonplaceholder.typicode.com/posts')}>show me data</button>
      {fetchData && fetchData.map(ele=><p key={ele.id}>{ele.title}</p>)}
    </div>
  );
}

export default App;
