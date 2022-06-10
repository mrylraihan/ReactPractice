import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const GetByName = () => {
    const [name, setName] = useState('')
    const [resultName, setResult] = useState('')
    const titleInput = useRef()
    useEffect(() => {
        axios.get(`http://localhost:3001/notes/todo/${name}`)
            .then(result => result.data)
            .then(result => setResult(result))
            .catch(err => console.log(err))
    }, [name])

    const submitHandler = () => {
        setName(titleInput.current.value)
        titleInput.current.value = ''
    }

    return (
        <div className='app'>
            <label>
                whats the title of your Note:
                <input type="text" ref={titleInput} />
                <button onClick={submitHandler}>submit title</button>
            </label>
            {resultName.title && 
            <div>
                    <h3>{resultName.title}</h3>
                    <h3>{resultName.body}</h3>
            </div>}

        </div>
    )
}

export default GetByName