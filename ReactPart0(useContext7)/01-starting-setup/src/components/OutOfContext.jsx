import React, { useContext } from 'react'
import TestContext from '../context/variable-context'

const OutOfContext = () => {
    const ctx = useContext(TestContext)
    return (
        <div>
            {/* this ctx.name is coming from our context default value */}
            <h1>{ctx.name}</h1>
        </div>
    )
}

export default OutOfContext