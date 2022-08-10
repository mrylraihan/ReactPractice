import React, { useRef } from 'react'
import TestRef from './TestRef'

const Test = () => {
    const inputRef=useRef('')
    return (
        <div>
            <div>
                <label htmlFor="">
                    test fording a ref:
                    <input type="text" ref={inputRef} />
                </label>
                <TestRef ref={inputRef}/>
            </div>
        </div>
    )
}

export default Test