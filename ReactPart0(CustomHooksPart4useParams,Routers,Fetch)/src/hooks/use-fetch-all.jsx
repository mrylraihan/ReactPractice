
import { useEffect } from 'react'
import { useState } from 'react'

const  useFetchAll= () => {
    const [url, setUrl] = useState('')
    const [data, setData] = useState([])
    useEffect(()=>{
        if(url){
            fetch(url)
            .then(res=>res.json())
            .then(setData)
            .catch(console.error)
        }else{
            setUrl('')
        }
    },[url])
    return [data, setUrl]
}

export default useFetchAll