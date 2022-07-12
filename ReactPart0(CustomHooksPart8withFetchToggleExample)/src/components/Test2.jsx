import React from 'react'
import useFetch from '../hooks/use-fetch-toggle'

const Test2 = () => {
    const { data, setUrl, isLoading } = useFetch()

    const getDataHandler=()=>{
        setUrl(data?'':'https://jsonplaceholder.typicode.com/posts')
    }

    // let content = <p>nothing yet!</p>
    // if (isLoading && !data) {
    //     content = <p>...isLoading</p>
    // }
    // if (data) {
    //     content = data.map(ele => <p key={ele.id}>{ele.title}</p>)
    // }

    return (
        <div>
            <h1>Test 2</h1>
            <p>creating a fetch custom hook that we google our fetch call with our button</p>
            <button onClick={getDataHandler}>show me data!</button>
            {/* {content} */}
            {!isLoading && !data && <p>nothing yet!</p>}
            {isLoading && !data && <p>...isLoading</p>}
            {data && data.map(ele => <p key={ele.id}>{ele.title}</p>)}
        </div>
    )
}

export default Test2