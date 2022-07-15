import React, { useRef, useState } from 'react'

const GetUrl = () => {
    const [result, setResult] = useState({})
    const inputUrl = useRef()

    const getUrl = (e) =>{
        e.preventDefault()
        fetch(inputUrl.current.value)
        .then(res=>res.json())
        .then(setResult)
        .catch(console.error)
        inputUrl.current.value = ''
    }
    return (
        <div>
            <p>with out hook</p>
            {result.quote && <h3>{result.quote}</h3>}
            <form onSubmit={getUrl}>
                <label>what api do you want to use:
                    <input type="text" ref={inputUrl}/>
                </label>
                <button type='submit'>show me result</button>
            </form>
        </div>
    )
}

export default GetUrl