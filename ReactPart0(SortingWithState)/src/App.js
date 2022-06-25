import React from 'react';

import './App.css';
import SortingWithDefaultArrs from './components/SortingWithDefaultArrs';
import SortingWithEmptyArrs from './components/SortingWithEmptyArrs';

function App() {
  const objArr = [
    {
      item: "bed",
      price: 100
    },
    {
      item: "apple",
      price: 1000
    },
    {
      item: "chair",
      price: 1
    },
    {
      item: "tv",
      price: 1500
    },
  ]
  return (
    <>
    <div className="app">
      <h1>Sorting an with State</h1>
      <p>these are the objects we will be sorting by</p>
      {objArr.map(ele=><p>Item name :{ele.item}, and Item price:{ele.price}</p>)}
    </div>
    <div className='app'>
      <SortingWithEmptyArrs objArr={objArr}/>
    </div>
    <div className='app'>
      <SortingWithDefaultArrs objArr={objArr}/>
    </div>
    </>
  );
}

export default App;
