import React, { useState } from 'react'
import useFetch from '../hooks/use-fetch'

const Test1 = () => {
    // const result = useFetch('https://jsonplaceholder.typicode.com/posts')
    const [isLoad, setIsLoad] = useState(false)
    const [data, setData] = useState('')
    
    const showDataHandler = ()=>{
        setIsLoad(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(setData)
        .then(()=>setIsLoad(false))
        .catch(console.error)
       
    }

    let content = <p>No Data!</p>
    
    if(isLoad && !data) content = <p>...Loading</p>

    if(data)content = data.map(ele=><p key={ele.id}>{ele.title}</p>)

    return (
        <div>
            <h1>Test1</h1>
            <button onClick={!data?showDataHandler:setData.bind(this,'')}>show me data</button>
            {content}
        </div>
    )
}

export default Test1