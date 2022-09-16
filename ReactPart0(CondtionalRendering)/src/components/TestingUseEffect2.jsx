import React, { useEffect, useState } from 'react'

function TestingUseEffect2() {
    const [count,setCount] = useState(0)
    // let num = 0;
    //  in a dependency array even if you put a variable, and that variable changes that wont, 
    //  trigger a re-render, it will only trigger a re-render if, a state is changed 
    useEffect(() => {
        console.log(count, 'in useEffect');
    }, [count])

    const addOne = () => {
        setCount(prev=>prev += 1)
    }
    return (
        <div className='app'>
            <h1>TestingUseEffect2</h1>
            <button onClick={addOne}>See if it increases</button>
        </div>
    )
}

export default TestingUseEffect2