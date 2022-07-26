import React, { useEffect, useState } from 'react'

const ShowMeQuote = () => {
    const [quote, setQuote] = useState('')
    const [toggle, setToggle] = useState(false)

    useEffect(()=>{
        fetch('https://api.kanye.rest')
        .then(res=>res.json())
        .then(result=>setQuote(result.quote))
        .catch(console.error)
    }, [toggle])

    const showMeQuote = ()=>{
        setToggle(!toggle)
    }

    return (
        <div>
            <h4>{quote}</h4>
            <button onClick={showMeQuote}>show me a quote</button>
        </div>
    )
}

export default ShowMeQuote