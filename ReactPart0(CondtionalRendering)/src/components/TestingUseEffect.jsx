import React, { useEffect } from 'react'

function TestingUseEffect() {
    
    let num = 0;
//  in a dependency array even if you put a variable, and that variable changes that wont, 
//  trigger a re-render, it will only trigger a re-render if, a state is changed 
    useEffect(()=>{
       console.log(num, 'in useEffect');
    },[num])
    
    const addOne = ()=>{
        num+=1
        console.log(num);
    }
  return (
    <div className='app'>
          <h1>TestingUseEffect</h1>
          <button onClick={addOne}>See if it increases</button>
    </div>
  )
}

export default TestingUseEffect