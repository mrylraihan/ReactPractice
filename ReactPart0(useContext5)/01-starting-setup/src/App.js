import React, {useRef, useState, useContext} from "react";
import ComponentG from "./components/ComponentG";
import ComponentH from "./components/ComponentH";
import ComponentA from './components/contextChange/ComponentA'
import './index.css'
import ChangeContext from "./store/context-change";


function App() {
  const defContext = useContext(ChangeContext)
 const nameChange = useRef('')
 const [isName, setIsName]=useState('')

 
 
 
 const onSubmit =(event)=>{
  event.preventDefault()
  console.log('From our State ' + nameChange.current.value);
   setIsName(nameChange.current.value)
   nameChange.current.value = ''

 }

 const testFunction = ()=>{
   console.log('im a test function seeing if Context got me');
 }
 
  return (
    <div className="App">
      <h1>Welcome</h1>
      <ChangeContext.Provider value={{ name: isName ? isName : defContext.name , 
        testF: testFunction}}>
      <ComponentA></ComponentA>
      <ComponentG/>
      </ChangeContext.Provider>
      <form onSubmit={onSubmit}>
        <label>Change the State and Context!</label>
        <input type='text' ref={nameChange}></input>    
      <button type="submit">Try me!</button>
      </form>
      <ComponentH />
    </div>
  );
}


export default App;
