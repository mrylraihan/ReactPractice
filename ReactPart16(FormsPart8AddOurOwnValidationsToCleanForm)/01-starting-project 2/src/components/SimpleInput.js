import { useState } from 'react'
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const { value: enteredName, 
    isValid:enteredNameIsValid,
    hasError: nameInputHasError,
     valueChangeHandler: nameChangeHandler,
      inputBlurHandler: nameBlurHandler, 
    reset:resetNameInput } = useInput((value)=>value.trim() !== '');



  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const enteredEmailIsValid = enteredEmail.includes('@')
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }


  // checking on every keystroke to change the validations state and if it was touched or not

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value)
  }
  // blue is for if the field is touched and here we are changing the validations for our error here and checking the input field

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true)
  }

  // on submit checking if the enterName state is empty to though an error
  const formSubmissionHandler = event => {
    event.preventDefault()
  
    if (!enteredNameIsValid) {
      console.log('nothing');
      return
    }
    // if you need every keystroke for example your going to validate it on every keystroke the state is better. 
    resetNameInput()
    setEnteredEmail('')
  
    setEnteredEmailTouched(false)

  }
  //  checks is the enterName state is empty and if input was touched to change the class 

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = enteredEmailIsInvalid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
        {/* if this true meaning enteredName is not valid and it was touched show this line of html */}
        {nameInputHasError && <p className='error-text'>you did'nt write anything!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input type='text' id='email' value={enteredEmail} onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} />
        {/* if this true meaning enteredName is not valid and it was touched show this line of html */}
        {enteredEmailIsInvalid && <p className='error-text'>please enter a valid email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
