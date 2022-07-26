import React, { useState } from 'react'

const ShowForm = () => {
    // state for the onchange and keypress
    const [enteredKeys , setEnteredKeys] = useState('')
    // state for input field being touched
    const [isTouched, setIsTouched] = useState(false)

    // everytime on of those 2 state changes teh component gets rerendered 
    // so these values will change 

    // checks is the state of the enteredKeys is not empty 
    const isEntered = enteredKeys.trim() !== ''
    // checks if isEntered is empty meaning its false but with the ! reverses it so its true  and if the input field was touched is true
    const isFalse = !isEntered && isTouched;


    
    const onChangeHandler = (e) =>{
        setEnteredKeys(e.target.value)
    }
    const onBlurHandler = (e) => {
        setIsTouched(true)
    }

    const submitHandler = ()=>{
        // checks is the state of enteredkeys are not empty 
        if (isEntered){
            console.log(enteredKeys);
            return
        }
        // if they are empty then run this code and reset the blur and input field 
        setEnteredKeys('')
        console.log('enteredKeys is false');
        setIsTouched(false)
    }
  
console.log(isTouched);

    return (
        <>
        <div>
            <label> type something in :   
                    <input type="text" onChange={onChangeHandler} onBlur={onBlurHandler} value={enteredKeys}/>
                    <button onClick={submitHandler}>submit</button>
            </label>
        </div>
        {isFalse && <p>you didnt write anything</p>}
        </>
    )
}

export default ShowForm