import React, { useRef, useState } from 'react';

import './App.css';

function App() {
  const [nameList, setName] = useState([])
  const nameRef = useRef()

  const submitNameHandler=()=>{
    const data = {name:nameRef.current.value}
    fetch('https://react-http-cb4a9-default-rtdb.firebaseio.com/names.json', {
      method:'POST',
      body: JSON.stringify(data),
    headers: { //not required by firebase but for other fetch calls it is
      'Content-Type': 'application/json'
    }
    })
    .then(result=>result.json())
    .then(result=>{
      console.log(result)//{name: '-N6EgZMI88qyVK9_XeMS'}
    })
    .catch(console.error)
  }

const getHandler=()=>{
  fetch('https://react-http-cb4a9-default-rtdb.firebaseio.com/names.json').then(res=>res.json())
  .then(result=>{
    console.log(result, 'in getHandler');
    const namelist = []
    for (const key in result) {
      let item = {
        id: key,
        name : result[key].name
      }
      namelist.push(item)
      setName(prev=>{
        return [...namelist]
      })
    }
  })
  .catch(console.error)
}


  return (
    <div className="app">
      <h1>Hi there!</h1>
      <div>
      <label>submit name:
        <input type='text' ref={nameRef}></input>
      </label>
        <button onClick={submitNameHandler}>submit data</button>
      </div>
      <button onClick={getHandler}>Show fetch data</button>
      {nameList && nameList.map(name=><h3 key={name.id}>{name.name}</h3>)}
    </div>
  );
}

export default App;
