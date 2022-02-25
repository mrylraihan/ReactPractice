import React, {useContext} from 'react'
import StaticContext from '../../store/context-static'

const ComponentF = () => {
    const sCtx = useContext(StaticContext)
    
    return (
        <div>
            <h1>{sCtx.name}</h1>
        </div>
    )
}

export default ComponentF 