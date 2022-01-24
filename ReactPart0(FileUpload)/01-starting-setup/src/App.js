import HighestLevelComp from "./components/HighestLevelComp";
import Welcome from './components/Welcome.js'
import React from "react";


function App() {
 
  // useEffect(()=>{
  //   printTestState()
  // })
  

  return (
    <div>
      <HighestLevelComp />
      <Welcome></Welcome>
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
