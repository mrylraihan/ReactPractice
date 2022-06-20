import React, { useContext, useState } from 'react'
import ContextFile from '../store/context-file'
const ShowNameContext = () => {
    const ctxFile = useContext(ContextFile)
    const [sentence , setSentence ]= useState('')
    const displaySentence = ()=>{
        setSentence(sentence ? '' : ctxFile.sayName())
    }
    return (
        <div>
            <h1>{ctxFile.name}</h1>
            <h3>{sentence}</h3>
            <button onClick={displaySentence}>Check context</button>
        </div>
    )
}

export default ShowNameContext