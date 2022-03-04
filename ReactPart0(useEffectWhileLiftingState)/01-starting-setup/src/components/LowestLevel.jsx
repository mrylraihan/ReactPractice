import React, { useEffect } from 'react'

const LowestLevel = (props) => {
    useEffect(()=>{
        console.log('in the lowest level useEffect!');
    },[props.res])
    return (
        <div>
            <h1>hi</h1>
            <h2>{""+props.res}</h2>
            <button onClick={()=>{
                props.setRes(props.res?false:true)
                console.log(props.res);
                }}>Change Res</button>
        </div>
    )
}

export default LowestLevel