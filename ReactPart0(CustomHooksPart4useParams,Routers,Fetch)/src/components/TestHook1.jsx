import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetchAll from '../hooks/use-fetch-all'

const TestHook1 = () => {
    const [data, setUrl] = useFetchAll()
    const [list, setList] = useState([])
    const nav = useNavigate()
    useEffect(()=>{
        setUrl('https://jsonplaceholder.typicode.com/posts')
    },[data, setUrl])

    const showData = ()=>{
        
        setList(data)
    }

    const hideData = ()=>{
        setList([])
    }
    let content = list.length >0 ?
        list.map(ele=>{
        return <p key={ele.id} onClick={()=>nav(`/${ele.id}`)}>{ele.title}</p>
    }):
    <p>No data!</p>

    console.log(list);
    return (
        <div className='app'>
            <h1>TestHook1</h1>
            <button onClick={showData}>show me Data</button>
            {list.length>0 &&  <button onClick={hideData}>Hide Data</button>}
            {content}
        </div>
    )
}

export default TestHook1