import React, { useState, useEffect } from 'react'

function Test1() {
    const [toggle, setToggle] = useState(false);
    const [title, setTitle] = useState('')
    useEffect(()=>{
        setTitle('Title in useEffect empty dependency array');
        console.log('in useEffect');
    },[])
    console.log('outside of useEffect');
  return (
    <div>
       <h1>Test1</h1>
       <p>{title}</p>
       <button onClick={()=>setToggle(!toggle)}>click me!</button>
    </div>
    
  )
}

export default Test1