import React, { useState } from 'react'
import RenderIf from './RenderIf'

const FallbackComp =()=>{
    return (
        <h1>fallback</h1>
    )
}

const AnotherComp = () => {
const [btn, setButton] = useState(false)

    return (
        <div>
            <RenderIf condition={btn} fallback={<FallbackComp/>}>
                <h1>Hello World</h1>
            </RenderIf>
            <button onClick={()=>setButton(!btn)}>click me</button>
        </div>
    )
}

export default AnotherComp