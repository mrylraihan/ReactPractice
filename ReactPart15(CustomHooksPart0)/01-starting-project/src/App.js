import React, { useState } from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import useFetch from './hook/use-fetch';
function App() {
  const [res, setUrl] = useFetch()
  const [test, setTest] = useState('')
  const testStateDefault= ()=>{
    setTest({name:'wallie'})
  }
  const testCustomHook=()=>{
    setUrl('https://api.kanye.rest')
  }
  console.log(res);
  console.log('test', test);
  return (
    
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
      <button onClick={testCustomHook}>test custom hook!</button>
      <button onClick={testStateDefault}>test state!</button>
      {<p>{test.name}</p>}
    </React.Fragment>
  );
}

export default App;
