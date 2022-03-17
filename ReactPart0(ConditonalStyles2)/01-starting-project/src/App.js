import React, { useState } from 'react';
import WithAnd from './components/WithAnd';
import WithTernerary from './components/WithTernerary';
import TestComp from './components/TestComp'


function App() {
  const DUMMY_DATA = 
  [
    {
      id: 1,
      name:'One'
    },
    {
      id: 2,
      name:'Two'
    },
    {
      id: 3,
      name:'Three'
    },
  ]

  const [isActiveA , setIsActiveA] = useState(false)
  const [isActiveT , setIsActiveT] = useState(false)
  const [list, setList] = useState(DUMMY_DATA)


  return (
    <div>
      <WithAnd active={isActiveA} setActive={setIsActiveA}/>
      <WithTernerary active={isActiveT} setActive={setIsActiveT}/>
      <TestComp list={list}></TestComp>
    </div>
  );
}

export default App;
