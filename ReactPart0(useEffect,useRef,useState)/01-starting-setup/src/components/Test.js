import React , {useRef, useEffect, useState}from 'react';

function Test(props) {
    const [count, setCount] = useState(1)
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
        console.log('im working');
        setCount(preV=> preV+1)
        console.log(count);
    }, [props.name])
    // }, [inputRef, props.name, count])

    const sendData =()=>{

        // setCount((preV)=> preV+1)
        props.setName(inputRef.current.value)
        console.log(inputRef.current.value, 'in submit button');
        inputRef.current.value = ''
    }
    return ( 
        <div>
            <input type='text' ref={inputRef} placeholder={`hey ${props.name? props.name: 'user'}`}></input>
            <button onClick={sendData}>click me!</button>
            <h1>{count}</h1>
        </div>
     );
}

export default Test;