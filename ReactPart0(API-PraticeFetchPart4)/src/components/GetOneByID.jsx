import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const GetOneByID = () => {
    const [specifiedId, setSpecifiedId] = useState('')
    const [axiosResult, setAxiosResult] = useState({})
    const InputId = useRef()
    useEffect(() => {
        if(specifiedId)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${specifiedId
            }`)
            .then(result => result.data)
            .then(data => setAxiosResult(data))
            .catch(err => console.log(err))
    }, [specifiedId])
    const onSubmitHandler = () => {
        setSpecifiedId(InputId.current.value);
        InputId.current.value = '';

    }
    return (
        <>
            <div className='app'>
                <label>
                    Get one by Id :
                    <input type="text" ref={InputId} />
                </label>
                <button onClick={onSubmitHandler}>Get Specified Id</button>
            </div>
            <div className='app'>
                <p key={axiosResult.id}>{axiosResult.title}</p>
            </div>
        </>
    )
}

export default GetOneByID