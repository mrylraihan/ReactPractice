import React, { useContext } from 'react'
import ContextFile from '../storeContext/context-file'
// using context  
function Test2() {
    const ctx = useContext(ContextFile)
    return (
        <div>
            <h1>Test 2</h1>
            <p>{ctx.quote}</p>
        </div>
    )
}

export default Test2