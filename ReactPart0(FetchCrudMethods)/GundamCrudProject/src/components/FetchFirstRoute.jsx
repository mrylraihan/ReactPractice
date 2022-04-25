import React, { useEffect, useState } from 'react'

const FetchFirstRoute = () => {
    const [firstResult, setResult] = useState('')
    useEffect(()=>{
        fetch('http://localhost:4000/')
        .then(res=>res.json())
        .then(res=>setResult(res.message))
        .catch(console.error)
    }, [])
    return (
        <div>
            <h1>{firstResult}</h1>
        </div>
    )
}

export default FetchFirstRoute