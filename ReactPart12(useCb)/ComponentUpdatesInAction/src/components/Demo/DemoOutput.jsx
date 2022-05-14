import React from 'react'
import MyParaGraph from './MyParaGraph';

const DemoOutput = (props) => {
    console.log("DemoOutput Running!");
    return (
        <MyParaGraph>{props.show?'My Paragraph':''}</MyParaGraph>
    )
}

export default React.memo(DemoOutput)