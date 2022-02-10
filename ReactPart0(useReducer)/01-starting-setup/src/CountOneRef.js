import React, { useRef, useState } from 'react';

function CountOneRef() {
    // takes 2 params first one being the reducer function 
    // the second one being the initial state 
    const refCount = useRef()// these arent defined yet 
    const refWords = useRef()// extra ref practice
    const [num, setNum] = useState(0)
    return (
        <div>
            <div ref={refCount}>Count - {num} With state</div>
            <button onClick={() => setNum(refCount.current.value =num+ 1)}>Increment</button>
            <button onClick={() => setNum(refCount.current.value =num- 1)}>Decrement</button>
            <button onClick={() =>{
                console.log(refWords.current.value)
                refWords.current.value = ''
                console.log(refCount.current.value)
                setNum(refCount.current.value = 0)
            }}>Reset</button>
            {/* this is just extra ref practice */}
            <div>
            <input ref={refWords} type='text' placeholder='write something'></input>
            </div>
        </div>
    );
}

export default CountOneRef;