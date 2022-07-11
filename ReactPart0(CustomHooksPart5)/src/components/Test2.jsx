import React, { useState } from 'react'
import useFetch from '../hooks/use-fetch'

const Test2 = () => {
    const result = useFetch('https://jsonplaceholder.typicode.com/posts')
  
    const [data, setData] = useState([])//can be either an array or empty string 
    // the only thing is you need to check for what will give you back false and empty string is falsy and empty array isnt so you wil need to use .length > 0 to get back false

    const showDataHandler = () => {
     setData(result)
    }
    let content = <p>No Data!</p>

    if (data.length>0) content = data.map(ele => <p key={ele.id}>{ele.title}</p>)

    return (
        <div>
            <h1>Test2</h1>
            <button onClick={!data.length > 0 ? showDataHandler : setData.bind(this, [])}>show me data</button>
            {content}
        </div>
    )
}

export default Test2