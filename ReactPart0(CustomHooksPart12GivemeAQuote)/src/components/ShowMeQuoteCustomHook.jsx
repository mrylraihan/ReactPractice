import React from 'react'
import useQuote from '../hooks/use-fetch'
const ShowMeQuoteCustomHook = () => {
  const [quote, showMeQuote] = useQuote()

    return (
        <div>
            <h4>{quote}</h4>
            <button onClick={showMeQuote}>show me a quote</button>
        </div>
    )
}

export default ShowMeQuoteCustomHook