//we dont need React in th eimport because we arent returning jsx code 
import { useState, useEffect } from 'react'

//custom hook returning both state , and setMethod
const useApi = (url) => {
    const [result, setResult] = useState({})

    useEffect(()=>{
        
        if(url){
            fetch(url)
            .then(res=>res.json())
            .then(res=>{
                setResult(res)
            })
            .catch(console.error)
        }
    }, [url])

    return result
}

export default useApi