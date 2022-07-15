import { useState, useEffect } from 'react'
import axios from 'axios'
const useFetch = () => {
const [response, setResponse] = useState({})
const [isLoading, setIsLoading] = useState(false)
const [urlConfig, setUrlConfig] = useState({})
useEffect(()=>{
    if (urlConfig.url)
    setIsLoading(true)
    axios[`${urlConfig.method ? urlConfig.method : 'get'}`](urlConfig.url, urlConfig.body ? urlConfig.body:null) 
    .then(res=>res.data)
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