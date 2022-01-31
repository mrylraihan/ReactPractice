
import React from "react";
import Controlled from "./components/Controlled";
import ControlledF from "./components/ControlledF";
import UnControlled from "./components/UnControlled";
import UnControlledF from "./components/UnControlledF";


function App() {
  
  return (
    <div>
      <h1>Controlled vs UnControlled Components</h1>
      <p>- the Controlled uses State</p>
      <p>- the UnControlled uses Refs</p>
      <Controlled />
      <UnControlled />
      <ControlledF />
      <UnControlledF />
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
