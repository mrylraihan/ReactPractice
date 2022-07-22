import React, { useContext, useState } from 'react'
import ContextFile from '../store/context-file'

function ShowUnchangeContext() {
    const [sentence, setSentence] = useState('')
    const ctx = useContext(ContextFile)

    const displaySentence = ()=>{
        setSentence(sentence?'': ctx.sayName())
    }

    return (
        <div className='app'>
            <p>display context file with our binding it to state</p>
            <h4>{ctx.name}</h4>
            <button onClick={displaySentence}>show me a sentence</button>
            <p>{sentence}</p>
        </div>
    )
}

export default ShowUnchangeContext
