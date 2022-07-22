import React , {useState} from 'react';
import './App.css';
import ChangedName from './components/ChangedName';
import ShowChangeContext from './components/ShowChangedContext';
import ShowUnchangeContext from './components/ShowUnchangeContext';
import ContextFile from './store/context-file';

function App() {
  const [name, setName] = useState('Heshow')

  const saySomething = () => {
    return `hey it's ${name}`;
  }

  return (
    <div>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <ShowUnchangeContext />
    <ChangedName setName={setName}/>
    <ContextFile.Provider value={{name:name, sayName:saySomething}}>
      <ShowChangeContext />
    </ContextFile.Provider>
    </div>
  );
}

export default App;
