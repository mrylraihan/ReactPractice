import React, { useEffect, useState } from 'react'

function useFetch(api) {
    const [result, setResult] = useState('')
    useEffect(()=>{
        if(api){
            fetch(api)
                .then(res => res.json())
                .then(setResult)
                .catch(console.error)
        }
    },[api])

    return result
}

export default useFetch