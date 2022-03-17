import React from 'react'
import Button from './Button'

const testComp2 = (props) => {
    return (
        <div>
            <button onClick={()=>console.log(props, props.cat)}>click me PLEASE!</button>
            <Button type={props.type} onClick={()=>console.log(props, props.cat)}>click me PLEASE!</Button>
        </div>
    )
}

export default testComp2