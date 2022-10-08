import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Test1 from './components/Test1';
import './App.css';
import Test2 from './components/Test2';
import ContextFile from './storeContext/context-file';
import Test3 from './components/Test3';
import { useDispatch } from 'react-redux';



function App() {
  const [result1, setResult1] = useState('')
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    axios.get('https://api.kanye.rest')
    .then(res=>res.data)
    .then(result=>{
      setResult1(result)
      dispatch({ type: 'quote', q:result.quote})
    })
    .catch(console.error)
  }, [toggle])
  
  console.log(result1);
  
  return (
    <>
    <div className="app">
      <h1>passed as props!</h1>
      <Test1 result={result1}/>
    </div>
    <ContextFile.Provider value={{quote:result1.quote}}>
    <div className='app'>
      <h1>useContext</h1>
      <Test2 />
    </div>
    </ContextFile.Provider>
    <div className='app'>
        <h1>using redux</h1>
        <Test3/>
    </div>
    <div className='app'>
      <button onClick={()=>setToggle(!toggle)}>Get a New Quote</button>
    </div>
    </>
  );
}

export default App;
