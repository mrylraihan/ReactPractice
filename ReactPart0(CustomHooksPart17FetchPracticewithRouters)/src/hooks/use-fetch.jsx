import React from 'react'
import { useState } from 'react'

function useFetch (url) {
    const [result, setResult] = useState('')
    const getData = ()=>{
        fetch(url)
        .then(res=>res.json())
        .then(setResult)
        .catch(console.error)
    }

  return [result, getData]
}

export default useFetch