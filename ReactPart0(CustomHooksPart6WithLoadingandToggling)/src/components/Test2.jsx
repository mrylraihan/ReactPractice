import React, { useState } from 'react'
import useFetch from '../hooks/use-fetch'
//without toggling
const Test2 = () => {
    const [listData, setList] = useState('')
    const result = useFetch('https://jsonplaceholder.typicode.com/posts')
  
    let content = <p>No Data</p>
    const showData = ()=>{
        setList(result)
    }
    if (listData) content = result.map(ele => <p key={ele.id}>{ele.title}</p>)
 
    return (
        <div>
            <h2>Test2</h2>
            <button onClick={showData}>show data</button>
            {content}
        </div>
    )
}

export default Test2