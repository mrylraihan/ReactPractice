import React, { useContext } from 'react'
import TestContext from '../context/variable-context'

const HighestComp2 = () => {
    const ctx = useContext(TestContext)
    return (
        <div>
            <h1>{ctx.name}</h1>
        </div>
    )
}

export default HighestComp2