import  { useState } from 'react'
// we want to manage the value
// the touched state 
// its validity (combined with the touched state)
function useInput(validateValue) {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = (e) => {
        setIsTouched(true)
    }
    const reset = ()=>{
        setEnteredValue('')
        setIsTouched(false)
    }
    return {
        value:enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
        
    
}

export default useInput
