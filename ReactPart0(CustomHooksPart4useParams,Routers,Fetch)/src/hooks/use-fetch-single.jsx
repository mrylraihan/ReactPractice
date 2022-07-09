import { useState, useEffect } from 'react'

//hook that fetches one and uses the id as a parameter
function useFetchSingle(id) {
    const [data, setData] = useState()
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(setData)
        .catch(console.error)
    },[id])
    return data
}

export default useFetchSingle
