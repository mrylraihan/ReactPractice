import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [result, setResult] = useState('')

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(setResult)
        .catch(console.error)
    }, [url])

    return result
}

export default useFetch