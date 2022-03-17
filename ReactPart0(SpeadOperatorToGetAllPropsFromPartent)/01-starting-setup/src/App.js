
import React from "react";

import TestComp from "./components/testComp";
import Button from './components/Button.jsx'
import Button2 from './components/Button2.jsx'

function App() {
  const alertme = ()=> alert('hello')
  return (
    <div>
      <TestComp cat={'cat'} dog={'dog'} name={'Wallie'} type='button' onClick={alertme}/>
      <Button type='button' onClick={alertme}>button</Button>
      <Button2 type='button' onClick={alertme}>button2</Button2>
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
