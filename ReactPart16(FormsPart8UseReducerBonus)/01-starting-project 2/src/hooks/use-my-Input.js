import React, { useState } from 'react'

function useMyInput(validFn) {
    const [value, setValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validFn(value)
    const hasError = !valueIsValid && isTouched

    const valueChangeHandler = e=>{
        setValue(e.target.value);
    }
    const touchedBlurHandler = e=>{
        setIsTouched(true);
    }
    const reset=()=>{
        setIsTouched(false);
        setValue('');
    }

    return [value, valueChangeHandler, touchedBlurHandler, valueIsValid, hasError, reset]
}

export default useMyInput
