import React, { useState} from "react";
import HighestComp from './components/HighestComp.jsx'
import HighestComp2 from './components/HighestComp2.jsx'
import TestContext from "./context/variable-context.js";
import OutOfContext from './components/OutOfContext.jsx';


function App() {
  const [fullName, setFullName] = useState("")

  return (
    <>
    <OutOfContext/>
      <TestContext.Provider value={{ name: fullName, getFullN: setFullName, logSomething:()=>console.log('howdy yall!')}} >
      <HighestComp2></HighestComp2>
     <HighestComp/>
   </TestContext.Provider>
  </>
  
      );
}

      export default App;
