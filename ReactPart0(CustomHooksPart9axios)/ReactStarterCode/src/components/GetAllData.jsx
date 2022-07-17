import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/use-fetch'
const GetAllData = () => {
    const [data, setData]= useState([])
    const { response, isLoading, setUrlConfig } = useFetch()

    useEffect(()=>{
        setUrlConfig({
            url: 'https://jsonplaceholder.typicode.com/posts'
            // url: 'https://api.kanye.rest'
        })
    }, [])
    return (
        <div>
            <h1>Get all</h1>
            {/* <button onClick={()=>setData(data?'':response)}>show me data</button> */}
            <button onClick={()=>setData(data.length>0?'':response)}>show me data</button>
            {isLoading && <p>...Loading</p>}
            {/* {data && <p>{data.quote}</p>} */}
            {data.length > 0 && data.map(ele=><p key={ele.id}>{ele.title}</p>)}
        </div>
    )
}

export default GetAllData