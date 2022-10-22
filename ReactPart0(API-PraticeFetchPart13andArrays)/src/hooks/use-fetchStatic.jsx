import React, { useState } from 'react'
import { useEffect } from 'react'

function useFetch2(url) {
    const [result, setResult] = useState('')
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(setResult)
        .catch(console.error)
    },[])
  return result
}

export default useFetch2