import React, {useContext} from 'react'
import ChangeContext from '../../store/context-change'
const ComponentC = () => {
    const cCtx = useContext(ChangeContext)
    return (
        <div>
            <h1>{cCtx.name}</h1>
            <button onClick={() => console.log("From component C context " + cCtx.name)}>Show me the Context of This Component F</button>
        </div>
    )
}

export default ComponentC