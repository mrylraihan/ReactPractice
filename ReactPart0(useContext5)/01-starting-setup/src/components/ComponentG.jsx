import React, { useContext } from 'react'
import ChangeContext from '../store/context-change'
const ComponentG = () => {
    const realContext = useContext(ChangeContext)
    return (
        <div>
            <button onClick={() => console.log(realContext.name)}>Show me the Real contextChange</button>
            <button onClick={realContext.testF}>Test Function</button>
        </div>
    )
}

export default ComponentG