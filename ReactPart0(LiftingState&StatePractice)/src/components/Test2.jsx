import React from 'react'
import Test3 from './Test3'

const Test2 = (props) => {
    console.log(props.fullName , ' from Test2');
  const lastName = props.fullName.split(' ')[1]
 
    return (
        <div>
            <h1>Test2</h1>
            <p>{lastName}</p>
            <Test3 setFullName={props.setFullName} />
        </div>
    )
}

export default Test2