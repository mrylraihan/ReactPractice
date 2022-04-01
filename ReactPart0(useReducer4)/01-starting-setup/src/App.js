import React from 'react'
import FullNameReducer2 from './FullNameReducer2';
import FullNameReducer from './FullNameReducer';
import FullNameReducer3 from './FullNameReducer3'
import Sorting from './arrayMethodsComponents/Sorting';
import Filtering from './arrayMethodsComponents/Filtering';
import Reducing from './arrayMethodsComponents/Reducing';
const list = ['wallie', 'hisham', 'meshia']
function App() {
  const renderList = list.map(ele=><li key={list.indexOf(ele)}>{ele}</li>)
  return (
    <div className="App">
      <h1>Hello , lets learn about useReducer</h1>
      <FullNameReducer/>
      <FullNameReducer2/>
      <FullNameReducer3/>
     <h3>Mapped</h3>
      <ul>
      {renderList}
      </ul>
     <h3>Sorted</h3>
    <Sorting list={list}/>
     <h3>Filtering</h3>
    <Filtering list={list}/>
     <h3>Reducing</h3>
    <Reducing list={list}/>

    </div>
  );
}

export default App;