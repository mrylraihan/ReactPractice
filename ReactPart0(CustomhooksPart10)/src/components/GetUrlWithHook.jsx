import React, { useRef } from 'react'
import useApi from '../hooks/use-api'

const GetUrlWithHook = () => {
    const [response, setUrl] = useApi()
    const inputUrl = useRef()



    const getUrl = (e) => {
        e.preventDefault()
        setUrl(inputUrl.current.value)
            
        inputUrl.current.value = ''
    }
    return (
        <div>
            <p>with hook</p>
            {response.quote && <h3>{response.quote}</h3>}
            <form onSubmit={getUrl}>
                <label>what api do you want to use:
                    <input type="text" ref={inputUrl} />
                </label>
                <button type='submit'>show me result</button>
            </form>
        </div>
    )
}

export default GetUrlWithHook