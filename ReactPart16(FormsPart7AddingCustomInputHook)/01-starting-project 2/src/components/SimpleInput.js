import React from 'react'
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  // custom hook for name
  const { value: enteredName, 
    isValid:enteredNameIsValid,
    hasError: nameInputHasError,
     valueChangeHandler: nameChangeHandler,
      inputBlurHandler: nameBlurHandler, 
    reset:resetNameInput } = useInput((value)=>value.trim() !== '');
  // custom hook for email
  const { value: enteredEmail, 
    isValid:enteredEmailIsValid,
    hasError: emailInputHasError,
     valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailBlurHandler, 
    reset:resetEmailInput } = useInput((value)=>value.includes("@"));




  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }




  // on submit checking if the enterName state is empty to though an error
  const formSubmissionHandler = event => {
    event.preventDefault()
  
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      console.log('nothing');
      return
    }
    // if you need every keystroke for example your going to validate it on every keystroke the state is better. 
    resetNameInput()
    resetEmailInput()
  }
  //  checks is the enterName state is empty and if input was touched to change the class 

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'
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
        <input type='text' id='email' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {/* if this true meaning enteredName is not valid and it was touched show this line of html */}
        {emailInputHasError && <p className='error-text'>please enter a valid email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
