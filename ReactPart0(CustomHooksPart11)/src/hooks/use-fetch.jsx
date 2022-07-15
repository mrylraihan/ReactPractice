import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const [result, setResult] = useState('')
    // const [response, setResponse] = useState('')

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(setResult)
        .catch(console.error)
    }, [])
    // console.log(result);
    return result
}

export default useFetch