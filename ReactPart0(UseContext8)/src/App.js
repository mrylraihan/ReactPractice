import React, {useState} from 'react';
import './App.css';
import ChangeName from './components/ChangeName';
import ShowChangedContext from './components/ShowChangedContext';
import ShowNameContext from './components/ShowNameContext';

import ContextFile from './store/context-file'

function App() {
  const [name, setName]= useState('Heshow')

  const saySomething = ()=>{
    return `hey it's ${name}`;
  }
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
        <ChangeName setName={setName}/>
    </div>
    <div className='app'>
      <ShowNameContext />
    </div>
    <div className='app'>
        <ContextFile.Provider value={{name:name, sayName: saySomething}}>
        <ShowChangedContext />
        </ContextFile.Provider>
    </div>
    </>
  );
}

export default App;
