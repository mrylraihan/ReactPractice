
import React from "react";

import FullName from './components/FullName';
import FullNameRef from './components/FullNameRef';
import FullNameTimeout from "./components/FullNameTimeout";

function App() {
  
  return (
    <div>
     <FullNameTimeout/>
     <FullName/>
     <FullNameRef/>
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
