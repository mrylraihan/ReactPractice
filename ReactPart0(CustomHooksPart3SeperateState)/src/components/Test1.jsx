import React from 'react'
import { useState } from 'react';
import useApi from '../hooks/use-api';

const Test1 = () => {
    const [url, setUrl] = useState('')
    const result = useApi(url)

    console.log(result);
    return (

            <div className="app">
                <h1>Hi there!</h1>

                <button onClick={() => setUrl('https://api.kanye.rest')}>show me Results</button>
                {result && <h4>{result.quote}</h4>}
            </div>
    )
}

export default Test1