
import React from "react";

import GetFullName from "./components/GetFullName";
import GetFullNameRef from "./components/GetFullNameRef";
import CounterComp from './components/CounterComp'


function App() {
  
  return (
    <div>
     <CounterComp/>
     <GetFullName/>
     <GetFullNameRef/>
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
