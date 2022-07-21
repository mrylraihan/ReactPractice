import React from 'react'
import useToggle from '../hooks/use-toggle'

function ShowResult() {
   const [result, toggle] = useToggle()
   console.log(result);
    return (
        <div>
            <h1>The Result:{result.toString()}</h1>
            <button onClick={toggle}>change toggle</button>
        </div>
    )
}

export default ShowResult
