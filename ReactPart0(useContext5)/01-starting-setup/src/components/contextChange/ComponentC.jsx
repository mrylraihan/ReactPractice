import React, {useContext} from 'react'
import ChangeContext from '../../store/context-change'
const ComponentC = () => {
    const cCtx = useContext(ChangeContext)
    return (
        <div>
            <h1>{cCtx.name}</h1>
        </div>
    )
}

export default ComponentC