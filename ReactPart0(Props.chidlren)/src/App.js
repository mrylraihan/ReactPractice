import React, { useState } from 'react';

import './App.css';
import FormInput from './components/FormInput';
import TestPropsChildren1 from './components/TestPropsChildren1';
import TestPropsChildren2 from './components/TestPropsChildren2';
import TestPropsChildren3 from './components/TestPropsChildren3';


function App() {
  const [children, setChildren] = useState('')
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
      <TestPropsChildren1>This is how props.Children work </TestPropsChildren1>
      <TestPropsChildren2>Test 2</TestPropsChildren2>
      <FormInput setChildren={setChildren}/>
      <TestPropsChildren3>{children}</TestPropsChildren3>
    </>
  );
}

export default App;
