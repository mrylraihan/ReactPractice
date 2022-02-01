
import React, { useState } from "react";

import Controlled from "./components/Controlled";
import ControlledF from "./components/ControlledF";
import Test from "./components/Test";
import UnControlled from "./components/UnControlled";
import UnControlledF from "./components/UnControlledF";


function App() {
  const [name, setName] = useState('')
  return (
    <div>
      <h1>Controlled vs UnControlled Components</h1>
      <p>- the Controlled uses State</p>
      <p>- the UnControlled uses Refs</p>
      <Controlled />
      <UnControlled />
      <ControlledF setName={setName}/>
      <UnControlledF />
      <Test setName={setName} name={name}></Test>
    </div>
  );
}
// or you can do it like this 
// const App = ()=>  (
//     <div>
//       <h2>Let's get started!</h2>
//     </div>
//   );

export default App;
