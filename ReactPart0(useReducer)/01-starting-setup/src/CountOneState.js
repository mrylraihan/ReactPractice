import React, { useState } from 'react';

function CountOneState() {
    // takes 2 params first one being the reducer function 
    // the second one being the initial state 
    const [count, setCount] = useState(0)// these arent defined yet 
    return (
        <div>
            <div>Count - {count} With state</div>
            <button onClick={() => setCount(prev=>{
                return prev + 1
            })}>Increment</button>
            <button onClick={() => setCount(prev => {
                return prev - 1
            })}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default CountOneState;