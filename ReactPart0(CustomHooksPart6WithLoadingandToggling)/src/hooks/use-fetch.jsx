import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [result, setResult] = useState([])
    useEffect(()=>{
            fetch(url)
            .then(res=>res.json())
            .then(res=>{
                setResult(res)
            })
            .catch(console.error)
    },[url])
    return result
}

export default useFetch