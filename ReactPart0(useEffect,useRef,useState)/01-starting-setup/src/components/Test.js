import React , {useRef, useEffect}from 'react';

function Test(props) {
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    }, [inputRef, props.name])

    const sendData =()=>{
        props.setName(inputRef.current.value)
        console.log(inputRef.current.value);
        inputRef.current.value = ''
    }
    return ( 
        <div>
            <input type='text' ref={inputRef} placeholder={`hey ${props.name? props.name: 'user'}`}></input>
            <button onClick={sendData}>click me!</button>
        </div>
     );
}

export default Test;