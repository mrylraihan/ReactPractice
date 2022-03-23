import React from 'react'

const DisplayComp =React.forwardRef((props, ref) => {
    return (
        <div>
            <p ref={ref}>{ref.current.value}</p>
            <button onClick={props.onClick}>{props.children} {props.counter}</button>
        </div>
    )
}
)
export default DisplayComp