import React, { useEffect, useState } from 'react'

function NoArray() {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        console.log('useEffect with no array');
    })
    return (
        <div className='app'>
            <h2>No Array</h2>
            <button onClick={() => {
                setToggle(!toggle)
            }}>click me</button>
        </div>
    )
}

export default NoArray