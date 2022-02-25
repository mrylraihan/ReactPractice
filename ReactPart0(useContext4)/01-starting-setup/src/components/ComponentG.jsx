import React, { useContext } from 'react'
import ChangeContext from '../store/context-change'
const ComponentG = () => {
    const realContext = useContext(ChangeContext)
    return (
        <div>
            <button onClick={() => console.log(realContext.name)}>Show me the Real contextChange</button>
        </div>
    )
}

export default ComponentG