import React, { useEffect, useState } from 'react'
import axios from 'axios'
function ShowAllWithHook() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setData(res.data))
            .catch(console.error)
    }, [])

    return (
        <>
            <h1>im working</h1>
            {data.length > 0 && data.map(ele => <p key={ele.id}>{ele.title}</p>)}
        </>
    )
}

export default ShowAllWithHook
