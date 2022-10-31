import React, { useEffect, useState } from 'react';

import './App.css';


function App() {
const [name, setName] = useState('')
const [isValid, setIsValid] = useState(false)
const [inputName, setInputName] = useState('')
useEffect(()=>{
const getValid = setTimeout(()=>{
  setIsValid(inputName.trim().length> 10)
  console.log('in useEffect');// this will run on initial load, and 1000 milisecond after the last clean up function is run
},1000)
return ()=>{
  
  clearTimeout(getValid)
console.log('in clearTimeout');// will run evertime the useEffect is invoked
}
}, [inputName])

const onchangeInput = e =>{
  setInputName(e.target.value)
}
// console.log(isValid);
  return (
    <div className="app">
      {name && <h1>{name}</h1>}
      <form onSubmit={()=>{}}>
        <div>
          <label>First Name : 
            <input type="text" value={inputName} onChange={onchangeInput}/>
          </label>
        </div>
        <button type='submit' disabled={!isValid}>submit a name</button>
      </form>
    </div>
  );
}

export default App;
