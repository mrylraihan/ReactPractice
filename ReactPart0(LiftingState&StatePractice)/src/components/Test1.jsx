import React, { useEffect, useState } from 'react'
import Test2 from './Test2'

const Test1 = (props) => {
   const [firstName, setFirstName] = useState('')
   
   useEffect(()=>{
       setFirstName(props.fullName.split(' ')[0])
   }, [props.fullName])
     
   
    
    console.log(firstName, ' from Test1');
    return (
        <div>
            <h1>Test1</h1>
            <p>{firstName}</p>
            <Test2 fullName={props.fullName} setFullName={props.setFullName} />
        </div>
    )
}

export default Test1