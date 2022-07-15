import React, { useState } from 'react'
import useFetch from '../hooks/use-fetch'

const FetchAllWithHook = () => {
    const [response, setResponse] = useState('')
    const result = useFetch()

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res=>res.json())
    //     .then(setResult)
    //     .catch(console.error)
    // }, [])
    // console.log(result);

    return (
        <div>
            <h3>fetch all from jsonplaceholder.com</h3>
            <button onClick={()=>{setResponse(response?'':result)}}>{response?'hide Data': 'show Data'}</button>
            {response && response.map(ele=><p key={ele.id}>{ele.title}</p>)}
        </div>
    )
}

export default FetchAllWithHook