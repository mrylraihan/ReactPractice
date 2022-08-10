import React, { useEffect, useState } from 'react'

function TestNoHook() {
    const [result, setResult] = useState('')

    useEffect(()=>{
        fetch('https://api.kanye.rest')
        .then(res=>res.json())
        .then(setResult)
        .catch(console.error)
    },[])
    console.log(result, ' from useEffect return');
  return (
    <>
    <div>TestNoHook</div>
    {result && <p>{result.quote}</p>}
    </>
  )
}

export default TestNoHook