import { useEffect, useState } from 'react'

const useFetch = () => {
    const [url, setUrl]= useState('')
    const [result, setResult]= useState('nothing to report')

    useEffect(()=>{
        if(url){
            fetch(url)
            .then(res=>res.json())
            .then(res=>setResult(res))
            .catch(console.error)
        }
    },[url])

    return [result, setUrl]
}

export default useFetch