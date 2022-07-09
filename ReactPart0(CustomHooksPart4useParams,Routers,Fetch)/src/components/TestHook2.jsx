import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetchSingle from '../hooks/use-fetch-single'

const TestHook2 = () => {
    const params = useParams()
    const id = params.id
    const data = useFetchSingle(id)
    const nav = useNavigate()

    return (
        <div className='app'>
            <h1>TestHook2</h1>
            {!data && <h2>loading ...</h2>}
            {data && <h2>{data.title}</h2>}
           {data && <h4>{data.body}</h4>}
           <button onClick={nav.bind(this, -1)}>go back</button>
        </div>
    )
}

export default TestHook2