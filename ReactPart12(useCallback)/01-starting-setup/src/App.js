import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DemoOutPut';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  console.log('APP Running');

  const toggleParagraph = useCallback(() => {
    // if relying on the previous state and using function form of updating 
    if (allowToggle) {
      setShowParagraph(preV => !preV)
    }
    // setShowParagraph(!showParagraph)
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(!allowToggle)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      {/* {showParagraph && <p>This is new!</p>} */}

      {/* or */}
      {/* <Button onClick={()=>setShowParagraph(!showParagraph)}>Show Paragraph!</Button> */}
      <Button onClick={allowToggleHandler}>Allow Toggle! </Button>
      <Button onClick={toggleParagraph}>Toggle Paragraph!</Button>

    </div>
  );
}

export default App;
