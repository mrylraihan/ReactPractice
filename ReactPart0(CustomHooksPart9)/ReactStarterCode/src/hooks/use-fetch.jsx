import React, { useState, useEffect } from 'react'

const useFetch = () => {
const [response, setResponse] = useState({})
const [isLoading, setIsLoading] = useState(false)
const [urlConfig, setUrlConfig] = useState({})
useEffect(()=>{
    if (urlConfig.url)
    setIsLoading(true)
    fetch(urlConfig.url, {
        method: urlConfig.method ? urlConfig.method : 'GET',
        headers: urlConfig.headers ? urlConfig.headers : {},
        body: urlConfig.body ? JSON.stringify(urlConfig.body) : null,
    })
    .then(res=>res.json())
    .then(result=>{
        setResponse(result)
        setIsLoading(false)
    })
        .catch(err => {
            console.log(err);
            setIsLoading(false)
            setResponse('')
        })
    
    
}, [urlConfig])

    return { response, isLoading, setUrlConfig }
    
}

export default useFetch