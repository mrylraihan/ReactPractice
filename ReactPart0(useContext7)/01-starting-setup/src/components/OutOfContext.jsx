import React, { useContext } from 'react'
import TestContext from '../context/variable-context'

const OutOfContext = () => {
    const ctx = useContext(TestContext)
    return (
        <div>
            <h1>{ctx.name}</h1>
        </div>
    )
}

export default OutOfContext