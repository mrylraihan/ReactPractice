import React, { useContext, useEffect, useState } from 'react'
import TestContext from '../context/apicall-context'
const TestContextApi = () => {
    const ctx = useContext(TestContext)
    const [sendingApi, setSendingApi] = useState(null)
    const [inputApi, setInPutApi] = useState('')
    const [result, setResult] = useState('')
    useEffect(()=>{
        console.log('useEffect');
        if(setInPutApi){
            ctx.apiCall(sendingApi, setResult)
        }
    }, [sendingApi])

    const submitApi = (e)=>{
        e.preventDefault()
        setSendingApi(inputApi)
        setInPutApi('')
    }
    return (
        <div>
            <h2>{!result? 'Try this out !': result}</h2>
            <form onSubmit={submitApi}>
                <label htmlFor="apiCallInput">Api: 
                    <input id="apiCallInput" name="apiCallInput" type="text" value={inputApi} onChange={(e)=>{
                        setInPutApi(e.target.value)
                    }}/>
                </label>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default TestContextApi