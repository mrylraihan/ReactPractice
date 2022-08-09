import React, { useState } from 'react'

// Validating opn blur meaning when the input looses focus 

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('') //working with onChange meaning every key stroke 
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)



  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value)
  }

  // console.log(enteredName);//will log event time the state changes because the component is getting rerendered 
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
  }
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true)
  }
  const formSubmissionHandler = event => {
    event.preventDefault()
    setEnteredNameTouched(true)
    if(!enteredNameIsValid){
      console.log('you dont have anything');
      return 
    }
    console.log(enteredName);//Only when the form is submitted it will log the state value
    setEnteredName('')//resetting the enteredName state 
    setEnteredNameTouched(false)

    setEnteredEmail('')
    setEnteredEmailTouched(false)

  }

  
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
  const emailInputClasses = enteredEmailIsInvalid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      
      {/* name input */}
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlurHandler} />
      </div>
      {nameInputIsInvalid && <p className='error-text'>you dont have anything</p>}
      
      {/* email input */}
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={emailInputChangeHandler} value={enteredEmail} onBlur={emailInputBlurHandler} />
      </div>
      {enteredEmailIsInvalid && <p className='error-text'>Not a valid email</p>}
      
      {/* button */}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
