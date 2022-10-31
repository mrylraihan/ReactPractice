import React, { useEffect, useState } from 'react'

function EmptyArray() {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        console.log('useEffect with dependency array empty');
    }, [])
    return (
        <div className='app'>
            <h2>Empty Dependency Array</h2>
            <button onClick={() => {
                setToggle(!toggle)
            }}>click me</button>
        </div>
    )
}

export default EmptyArray