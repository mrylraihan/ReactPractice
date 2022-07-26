import React from 'react'

const Test = ({ name, age, setFName }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <button onClick={()=>setFName(prev=>prev == ""?'Raihan':'')}>change name</button>
        </div>
    )
}

export default Test