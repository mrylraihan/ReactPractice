import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import AddNames from './components/AddNames';
import DisplayName from './components/DisplayName';
import {toggleActions} from './store/toggle-slice'

function App() {
  const toggle = useSelector(state=>state.toggle.toggle)
  const dispatch = useDispatch()
  const toggleHeaders = ()=>{
    dispatch(toggleActions.getToggle())
  }
  return (
    <>
    <div className="app">
     { toggle && <h1>Hi there!</h1>}
    </div>
    <AddNames/>
    <DisplayName/>
    <div className='app'>
    <button onClick={toggleHeaders}>toggle</button>
    </div>
    </>
  );
}

export default App;
