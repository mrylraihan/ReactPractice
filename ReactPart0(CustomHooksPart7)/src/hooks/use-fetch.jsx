import { useState , useEffect } from 'react'

const useFetch = () => {
    const [list, setList] = useState([])
    const [url, setUrl] = useState('')

    useEffect(()=>{
        if(url){
            fetch(url)
            .then(res=>res.json())
            .then(setList)
            .catch(console.error)
        }
    },[url])
    return [list, setUrl]
}

export default useFetch