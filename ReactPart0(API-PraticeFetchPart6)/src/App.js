import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';
import StarShips from './components/StarShips';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships')
      .then(res => res.data)
      .then(result => {
        console.log(result);
        setData(result.results)
      })
  }, [])

  return (
    <div className="app">
     <h1>Star Wars api</h1>
     <StarShips data={data} />
    </div>
  );
}

export default App;
