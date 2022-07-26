import React, { useEffect, useState } from 'react'

const useQuote = () => {
    const [quote, setQuote] = useState('')
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        fetch('https://api.kanye.rest')
            .then(res => res.json())
            .then(result => setQuote(result.quote))
            .catch(console.error)
    }, [toggle])

    const showMeQuote = () => {
        setToggle(!toggle)
    }
    return [quote, showMeQuote]
}

export default useQuote