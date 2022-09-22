import React, { useState } from 'react'

function useFetch() {
    const [result, setResult] = useState('')
    const fetchData = ()=>{
        fetch('https://api.kanye.rest')
        .then(res=>res.json())
        .then(setResult)
        .catch(console.error)
    }
  return [result, fetchData]
}

export default useFetch