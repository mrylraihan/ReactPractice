import React, { useState } from "react";
import HighestLevel from './components/HighestLevel.jsx'
import TestContext from "./context/variable-context.js";



function App() {
  const [res, setRes] = useState(false)
  return (

    <TestContext.Provider value={{result:res, setResult:setRes}}>
      <HighestLevel></HighestLevel>
    </TestContext.Provider>
    
      );
}

      export default App;
