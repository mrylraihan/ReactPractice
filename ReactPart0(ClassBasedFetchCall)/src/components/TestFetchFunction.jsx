import React, {useState, useEffect} from 'react'

const TestFetchFunction = () => {
    const [btnToggle, setBtnToggle] = useState(false)
    const [quote, setQuote] = useState('')
    useEffect(()=>{
        fetch(`https://api.kanye.rest`)
        .then(res=>res.json())
        .then(result=>setQuote(result.quote))
        .catch(console.error)
    }, [btnToggle])
    return (
        <div>
            <h3>{quote}</h3>
            <button onClick={()=>setBtnToggle(!btnToggle)}>Fetch a Quote</button>
        </div>
    )
}

export default TestFetchFunction