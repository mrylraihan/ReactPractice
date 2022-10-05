import React, { useState } from 'react'
import { useEffect } from 'react'

function UseFetch(url) {
  const [quote, setQuote] = useState('')
  
  useEffect(()=>{
    if(url){
      fetch(url)
        .then(res => res.json())
        .then(result => setQuote(result.quote))
        .catch(console.error)
    }
  },[])

  const getQuote = ()=>{
    fetch(url)
    .then(res=>res.json())
    .then(result=>setQuote(result.quote))
    .catch(console.error)
  }
  return [quote, getQuote]
}

export default UseFetch