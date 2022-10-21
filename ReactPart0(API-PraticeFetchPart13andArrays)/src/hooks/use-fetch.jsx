import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState('')
    
   const getData = ()=>{
        fetch(url)
        .then(res=>res.json())
        .then(result=>setData(result.quote))
        .catch(console.error)
    }

  return [data, getData]
}

export default useFetch