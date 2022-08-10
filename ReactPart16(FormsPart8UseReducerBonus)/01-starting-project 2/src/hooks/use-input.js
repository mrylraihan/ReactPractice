import  { useReducer } from 'react'
// we want to manage the value
// the touched state 
// its validity (combined with the touched state)
const initialInputState = {
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action)=>{
    if(action.type === 'INPUT'){
        return { ...state, value:action.value}
    }
    if(action.type === "BLUR"){
        return { ...state, isTouched: true }
    }
    if(action.type === "RESET"){
        return initialInputState
    }
    
}

function useInput(validateValue) {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)


    // const [enteredValue, setEnteredValue] = useState('')
    // const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched
    // const valueIsValid = validateValue(enteredValue);
    // const hasError = !valueIsValid && isTouched

    const valueChangeHandler = event => {
        dispatch({type: 'INPUT', value: event.target.value})
        // setEnteredValue(event.target.value)
    }

    const inputBlurHandler = (e) => {
        dispatch({ type: 'BLUR'})
        // dispatch({ type: 'BLUR', isTouched: true })
        // setIsTouched(true)
    }
    const reset = ()=>{
        dispatch({type:'RESET'})
        // setEnteredValue('')
        // setIsTouched(false)
    }
    return {
        value:inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
        
    
}

export default useInput
