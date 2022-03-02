import React, { useEffect, useState } from 'react'

const KQuote2NUE = () => {
    const [kQuote, setKQoute] = useState('No UseEffect')
    useEffect(()=>{
        
        fetch('https://api.kanye.rest')
        .then(res=> res.json())
        .then(res=> setKQoute(res.quote))
        .catch(error=>console.log(error))
        
    },[])

    return (
        <div>
            <h1>{kQuote}</h1>
        </div>
    )
}

export default KQuote2NUE