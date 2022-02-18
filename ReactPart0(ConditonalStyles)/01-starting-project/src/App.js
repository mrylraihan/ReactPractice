import React, { useState } from 'react';
import WithAnd from './components/WithAnd';
import WithTernerary from './components/WithTernerary';


function App() {

  const [isActiveA , setIsActiveA] = useState(false)
  const [isActiveT , setIsActiveT] = useState(false)


  return (
    <div>
      <WithAnd active={isActiveA} setActive={setIsActiveA}/>
      <WithTernerary active={isActiveT} setActive={setIsActiveT}/>
    </div>
  );
}

export default App;
