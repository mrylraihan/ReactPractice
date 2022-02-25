import React, { useContext } from 'react'
import ChangeContext from '../store/context-change'
const ComponentH = () => {
    const realContext = useContext(ChangeContext)
    return (
        <div>
            <button onClick={() => console.log(realContext.name)}>Show me the Real contextChange NotWrapped!</button>
        </div>
    )
}

export default ComponentH