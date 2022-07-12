import React, { useState } from 'react'

function Test1() {
    const [data, setData] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const getDataHandler = ()=>{
        setIsLoading(true)
        fetch(data ? '' :'https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(res=>{
            setData(res)
            setIsLoading(false)
        
        })
        .catch(err=>{
            console.log(err);
            setIsLoading(false)
            setData('')
        })
    }
    
// let content = <p>nothing yet!</p>

//     if(isLoading && !data){
//         content = <p>...isLoading</p>
//     }
//     if(data){
//         content = data.map(ele=><p key={ele.id}>{ele.title}</p>)
//     }

    return (
        <>
        <h1>Test 1</h1>
        <p>toggling fetch call with the our button function</p>
        <button onClick={getDataHandler}>show me data</button>
        {/* {content} */}
        {/* another way of doing this */}
            {!isLoading && !data && <p>nothing yet!</p>}
            {isLoading && !data && <p>...isLoading</p>}
            {data && data.map(ele => <p key={ele.id}>{ele.title}</p>)}

        </>
    )
}

export default Test1
