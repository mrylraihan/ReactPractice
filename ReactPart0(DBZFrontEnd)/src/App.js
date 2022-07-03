import React, { useEffect, useRef, useState } from 'react';

import './App.css';

function App() {
  const [allCharacters, setAllCharacters] = useState([])
  const [character, setCharacter] = useState({})
  const nameRef = useRef()

  //post method 
const onSubmitHandler = (e)=>{
  e.preventDefault()
  const obj = {character:{name:nameRef.current.value}}
  nameRef.current.value = ''
 
  //post fetch call here 
  fetch('http://localhost:4000/dbz/', {//anything but get needs headers
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(obj)
  }).then(res=>res.json())
  .then(result=>setCharacter(result))
  .catch(console.error)
}
  
  //fetch all method
useEffect(()=>{
  fetch('http://localhost:4000/dbz/')//get by default
  .then(res=>res.json())
  .then(result=>setAllCharacters(result))
  .catch(console.error)
}, [character])

let content = allCharacters.map(ele=>{
return <p key={ele._id}>{ele.name}</p>
})

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {character && <h3>{character.name}</h3>}
      <form onSubmit={onSubmitHandler}>
        <label>Create a character:
          <input type='text' ref={nameRef}/>
        </label>
        <button type='submit'>Submit</button>
      </form>
      <div>
        {content}
      </div>
    </div>
  );
}

export default App;
