
import React from "react";

import CounterComp from './components/CounterComp';
import CounterCompUState from './components/CounterCompUState';
import CounterCompReducer from './components/CounterCompReducer';


function App() {
  
  return (
    <div>
      <p>useState</p>
      <CounterCompUState/>
     <p>useReducer</p>
     <CounterCompReducer/>
     <p>with Nothing</p>
     <CounterComp/>
    </div>
  );
}

export default App;
