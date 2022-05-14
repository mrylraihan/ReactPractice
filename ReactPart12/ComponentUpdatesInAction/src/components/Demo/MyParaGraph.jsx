import React from 'react'

const MyParaGraph = (props) => {
    console.log("MyParagraph Running!");
    return (
        <div>
            <p>{props.children}</p>
        </div>
    )
}

export default MyParaGraph