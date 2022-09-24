import React from 'react';
import FullNameState from './components/FullNameState'
import FullNameUseReducer from './components/FullNameUseReducer'
import FullNameRedux from './components/FullNameRedux.jsx'
import './App.css';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
      <FullNameState></FullNameState>
      <FullNameUseReducer></FullNameUseReducer>
      <FullNameRedux></FullNameRedux>
    </>
  );
}

export default App;
