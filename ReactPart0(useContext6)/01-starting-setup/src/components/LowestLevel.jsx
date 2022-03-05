import React, { useContext, useEffect } from 'react'
import TestContext from '../context/variable-context'

const LowestLevel = () => {
   const ctx = useContext(TestContext)
    useEffect(()=>{
        console.log('in the lowest level useEffect!');
    },[ctx.result])
    return (
        <div>
            <h1>hi</h1>
            <h2>{""+ctx.result}</h2>
            <button onClick={()=>{
                ctx.setResult(ctx.result?false:true)
                console.log(ctx.result);
                }}>Change Res</button>
        </div>
    )
}

export default LowestLevel