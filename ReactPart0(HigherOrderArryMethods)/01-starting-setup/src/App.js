import React from "react";
import Filtering from "./components/Filtering.jsx";
import Reducing from "./components/Reducing.jsx";
import Sorting from './components/Sorting.jsx'


function App() {
  const simpleNumArr = [9,56,3,6,15,1,27]
  const stringArr = ['Wallie', 'Hisham', 'Meshia']
  const objectString = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
    { name: 'Company Two', category: 'Tech', start: 1991, end: 2013 },
    { name: 'Company Three', category: 'NonProfit', start: 1971, end: 2003 },
    { name: 'Company Four', category: 'Retail', start: 1999, end: 2000 },
    { name: 'Company Five', category: 'Auto', start: 2000, end: 2021 },
    { name: 'Company Six', category: 'Medical', start: 2010, end: 2020 },
    { name: 'Company Seven', category: 'Retail', start: 2011, end: 2015 }
  ]


  return (
    <div>
     <h1>Higher Order Array Methods</h1>
     <div>
      <code> const simpleNumArr =[9,56,3,6,15,1,27] </code>
     </div>
      <div>
      <code> const stringArr = ['Wallie', 'Hisham', 'Meshia']</code>
      </div>
      <div>
        <code>const objectString = <span>{"[{name:'Company One', category:'Finance, start: 1981, end: 2003}, etc]"}</span></code>
      </div>
      <Sorting numArr={simpleNumArr} stringArr={stringArr} objArr={objectString}/>
      <Reducing numArr={simpleNumArr} stringArr={stringArr} objArr={objectString}/>
      <Filtering numArr={simpleNumArr} stringArr={stringArr} objArr={objectString}/>
    </div>
  );
}


export default App;
