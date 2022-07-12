import React from 'react'
import useFetchAll from '../hooks/use-fetch-all'

const Test3 = () => {
    const result = useFetchAll()

    // let content = <p>nothing yet!</p>

    //     if(isLoading && !data){
    //         content = <p>...isLoading</p>
    //     }
    //     if(data){
    //         content = data.map(ele=><p key={ele.id}>{ele.title}</p>)
    //     }

    return (
        <>
            <h1>Test 3</h1>
            <p>isLoading while using just the fetch</p>
            {/* {content} */}
            {/* another way of doing this */}
            {!result.isLoading && !result.data && <p>nothing yet!</p>}
            {result.isLoading && !result.data && <p>...isLoading</p>}
            {result.data && result.data.map(ele => <p key={ele.id}>{ele.title}</p>)}

        </>
    )
}

export default Test3