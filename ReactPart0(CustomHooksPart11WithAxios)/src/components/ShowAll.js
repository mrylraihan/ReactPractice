import React, { useEffect, useState } from 'react'
import axios from 'axios'
function ShowAll() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            setData(res.data)
            setIsLoading(false)
        })
        .catch(console.error)
    },[])

    let content = <p>data goes here!</p>

    if(isLoading){
        content = <p>...isLoading</p>
    }
    
    if(data.length>0){
        content = data.map(ele => <p key={ele.id}>{ele.title}</p>)
    }

    return (
        <>
        <h1>im working</h1>
        {content}
        </>
    )
}

export default ShowAll
