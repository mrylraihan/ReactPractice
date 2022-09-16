import { useEffect, useState } from 'react'


function useFetch(url) {
    const [result, setResult] = useState('')
    const [toggle, setToggle] = useState(false)
    useEffect(()=>{
        if(url){
            fetch(url)
            .then(res=>res.json())
            .then(setResult)
            .catch(console.error)
        }
    }, [url, toggle])

    return [result, setToggle]
}

export default useFetch