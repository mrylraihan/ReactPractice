import React, {useState, useEffect, useRef} from "react";

const ControlledFStateAndRef = (props)=>{
    const inputRef = useRef()
    const [userInput, setUserInput] = useState({
        name:'',
        Over6Chars: false
    })
    const {Over6Chars : isValid} = userInput 
    useEffect(()=>{
        inputRef.current.focus()
        console.log(isValid, 'destructured properly');
    }, [isValid])

    const handleChange = event =>{
        setUserInput(preV => {
            return { ...preV, name: event.target.value }
        })
        // console.log(userInput.Over6Chars);
    }

    const handleSubmit = ()=>{
        console.log(userInput.name , ' from functional controlled Component');
        setUserInput(preV => {
            return { ...preV, Over6Chars: preV.name.length > 6}
        })
      
        props.setName(userInput.name)
        setUserInput(preV=>{
            return {...preV, name:''}
        })
    }
    return (
        <>
            <input
                type='text'
                ref={inputRef}
                value={userInput.name}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Click me Controlled Functional</button>
        </>
    )
}

export default ControlledFStateAndRef