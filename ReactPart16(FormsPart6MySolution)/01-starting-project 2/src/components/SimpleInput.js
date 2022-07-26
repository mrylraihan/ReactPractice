import { useState } from 'react'

const SimpleInput = (props) => {
  const [enterName, setEnteredName] = useState('')
  const [enterEmail, setEnteredEmail] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)


  
  // this will get rerendered on every keystroke due to the state change so this value will keep changing depending on the state of the enteredName
  const enteredNameIsValid = enterName.trim() !== ''
  const enteredEmailIsValid = enterEmail.includes('@')
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched
  
  let formIsValid = false;
    if(enteredNameIsValid && enteredEmailIsValid){
      formIsValid = true
    }

  
  // checking on every keystroke to change the validations state and if it was touched or not
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }
  const emailInputChangeHandler = e=>setEnteredEmail(e.target.value)
  // blue is for if the field is touched and here we are changing the validations for our error here and checking the input field
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true)
  }
  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true)
  }


  // on submit checking if the enterName state is empty to though an error
  const formSubmissionHandler = event => {
    event.preventDefault()
    // setEnteredNameTouched(true);
    if (enteredNameIsValid && enteredEmailIsValid) {

      return
    }
    // if you need every keystroke for example your going to validate it on every keystroke the state is better. 
    setEnteredName('')
    setEnteredEmail('')
    setEnteredNameTouched(false)
    setEnteredEmailTouched(false)
  }
  //  checks is the enterName state is empty and if input was touched to change the class 

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enterName} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
        {/* if this true meaning enteredName is not valid and it was touched show this line of html */}
        {nameInputIsInvalid && <p className='error-text'>you did'nt write anything!</p>}
      </div>
      {/* for email */}
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='text' id='email' value={enterEmail} onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} />
        {/* if this true meaning enteredName is not valid and it was touched show this line of html */}
        {emailInputIsInvalid && <p className='error-text'>you did'nt write anything!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
