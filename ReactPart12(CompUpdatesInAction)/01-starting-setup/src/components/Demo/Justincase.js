import React from 'react'

const JustInCase = ()=>{
    console.log('Lets see if this works!');
    return (
        <p>Just in case!</p>
    )
}
export default React.memo(JustInCase)