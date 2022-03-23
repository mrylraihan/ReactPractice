import React from 'react'

const DisplayComp =React.forwardRef((props, ref) => {
    return (
        <div>
            <p>{ref.current.value}</p>
            <input type="text" ref={ref} />
            <button onClick={props.onClick}>{props.children} {props.fullName}</button>
        </div>
    )
}
)
export default DisplayComp