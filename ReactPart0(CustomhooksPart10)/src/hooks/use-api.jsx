import { useEffect, useState } from 'react'

const useApi = () => {
    const [url, setUrl] = useState('')
    const [result, setResult] = useState({})

    useEffect(()=>{
        if(url){
            fetch(url)
            .then(res=>res.json())
            .then(setResult)
            .catch(console.error)
        }
    }, [url])

    return [result, setUrl]
}

export default useApi