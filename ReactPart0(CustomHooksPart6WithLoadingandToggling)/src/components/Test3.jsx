import React from 'react'
import useFetchToogle from '../hooks/use-fetch-toggle'

const Test3 = () => {
    const [result, isLoading, setUrl] = useFetchToogle()
    
    const getData = ()=>{
        setUrl('https://jsonplaceholder.typicode.com/posts')
    }
    return (
        <div>
            <h1>Test3</h1>
            <button onClick={result.length>0?setUrl.bind(this,''):getData}>show me data</button>

            {!isLoading && <p>no Data</p>}
            {isLoading && <p>...Loading</p>}
            
            {result.length>0 && result.map(ele=><p key={ele.id}>{ele.title}</p>)}
           
        </div>
    )
}

export default Test3