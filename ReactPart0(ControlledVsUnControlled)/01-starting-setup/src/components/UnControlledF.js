import React, { useRef } from "react";

const UnControlledF = () => {
    const userInput = useRef()

   

    const handleSubmit = () => {
        console.log(userInput.current.value, ' from functional uncontrolled Component');
        userInput.current.value = ''
    }
    return (
        <>
            <input
                type='text'
                ref={userInput}
            />
            <button onClick={handleSubmit}>Click me UnControlled Functional</button>
        </>
    )
}

export default UnControlledF