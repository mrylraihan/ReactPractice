import React, {useState} from "react";

const ControlledF = (props)=>{
    const [userInput, setUserInput] = useState('')

    

    const handleChange = event =>{
        setUserInput(event.target.value)
    }

    const handleSubmit = ()=>{
        console.log(userInput , ' from functional controlled Component');
        props.setName(userInput)
        setUserInput('')
    }
    return (
        <>
            <input
                type='text'
                value={userInput}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Click me Controlled Functional</button>
        </>
    )
}

export default ControlledF