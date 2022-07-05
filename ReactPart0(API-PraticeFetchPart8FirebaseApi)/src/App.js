import React, { useRef, useState } from 'react';

import './App.css';

function App() {
  const [nameList, setName] = useState([])
  const nameRef = useRef()

  const submitNameHandler=()=>{
    let data = {name: nameRef.current.value}
    nameRef.current.value = ''
    fetch('https://react-http-cb4a9-default-rtdb.firebaseio.com/names.json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { //not required by firebase but for other fetch calls it is
        'Content-Type': 'application/json'
      }
    }).then(res=>res.json())
    .then(console.log)
  }

const getHandler=()=>{
  fetch('https://react-http-cb4a9-default-rtdb.firebaseio.com/names.json')
  .then(res=>res.json())
  .then(result=>{
    console.log(result['-N6FFYnKVfrlYNU0LXk0'].name)//annoying way to do it
    let newArr = []
    for (const key in result) {
     newArr.push({
      id:key,
      name:result[key].name
     })
    }
    setName(newArr)
  })
}

console.log(nameList);

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
