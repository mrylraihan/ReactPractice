import React, { useContext } from 'react'
import ContextFile from '../store/context-file'

const ShowChangedContext = () => {
    const ctxFile = useContext(ContextFile)
    return (
        <div>
            <h1>{ctxFile.name}</h1>
            <button onClick={() => ctxFile.sayName()}>Check context</button>
        </div>
    )
}

export default ShowChangedContext