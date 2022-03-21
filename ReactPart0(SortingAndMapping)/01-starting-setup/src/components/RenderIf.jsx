import React from 'react'

const RenderIf = ({condition = false, children = <></>, fallback = <></>}) => 
    (
        condition ? children : fallback
    )


export default RenderIf