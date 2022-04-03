import React, { useContext } from 'react'
import TestContext from '../context/variable-context'

const HighestComp2 = () => {
    const ctx = useContext(TestContext)
    return (
        <div>
            {/* this ctx.name is coming from our context provider wrapping our this component, the value of name is coming from our value prop on the provider which allows us to change its state */}
            <h1>{ctx.name}</h1>
        </div>
    )
}

export default HighestComp2