import React, { useContext } from 'react'
import TestContext from '../context/variable-context'

const LowestComp = () => {
    const ctx = useContext(TestContext)
    return (
        <div>
            <button onClick={ctx.logSomething}>Log Something</button>
        </div>
    )
}

export default LowestComp