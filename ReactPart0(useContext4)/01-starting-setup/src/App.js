import React, {useRef, useState} from "react";
import ComponentG from "./components/ComponentG";
import ComponentA from './components/contextChange/ComponentA'
import ComponentD from './components/contextStatic/ComponentD'
import './index.css'
import ChangeContext from "./store/context-change";


function App() {
 const nameChange = useRef('')
 const [isName, setIsName]=useState('')

 
 
 
 const onSubmit =(event)=>{
  event.preventDefault()
  console.log('From our State ' + nameChange.current.value);
   setIsName(nameChange.current.value)
   nameChange.current.value = ''

 }
 
  return (
    <div className="App">
      <h1>Welcome</h1>
      <ChangeContext.Provider value={{ name: isName ? isName:'Wallie from change context'}}>
      <ComponentA></ComponentA>
      <ComponentG/>
      </ChangeContext.Provider>
      <form onSubmit={onSubmit}>
        <label>Change the State and Context!</label>
        <input type='text' ref={nameChange}></input>    
      <button type="submit">Try me!</button>
      </form>
      <ComponentD></ComponentD>
    </div>
  );
}


export default App;
