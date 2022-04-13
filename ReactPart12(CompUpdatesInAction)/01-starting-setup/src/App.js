import React, { useState } from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DemoOutPut';
import './App.css';
import JustInCase from './components/Demo/Justincase';

function App() {
  const [showParagraph, setShowParagraph] = useState(true)
  console.log('APP Running');
  const toggleParagraph = () => {
    // if relying on the previous state and using function form of updating 
    // setShowParagraph(preV=>!preV)
    setShowParagraph(!showParagraph)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      {/* {showParagraph && <p>This is new!</p>} */}

      {/* or */}
      {/* <Button onClick={()=>setShowParagraph(!showParagraph)}>Show Paragraph!</Button> */}
      <Button onClick={toggleParagraph}>Toggle Paragraph!</Button>
      <JustInCase/>
    </div>
  );
}

export default App;
