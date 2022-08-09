import React, { useEffect, useRef, useState } from 'react'


const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('') //working with onChange meaning every key stroke 
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  useEffect(()=>{
    if(enteredNameIsValid)console.log('im in a useEffect and im true!');
  },[enteredNameIsValid])

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
    setEnteredNameIsValid(true)
  }

  // console.log(enteredName);//will log event time the state changes because the component is getting rerendered 

  const formSubmissionHandler = event => {
    event.preventDefault()
    setIsTouched(true)
    // add a conditional to check
    if (enteredName.trim() === '') {
      console.log('nothing');
      setEnteredNameIsValid(false)
      return;
    }else{
      setEnteredNameIsValid(true)
      console.log(enteredName);//Only when the form is submitted it will log the state value
      setEnteredName('')//resetting the enteredName state 
      const enteredValue = nameInputRef.current.value
      console.log(enteredValue);//Only when the form is submitted it will log the ref value
      nameInputRef.current.value = ''//resetting the nameInputRef value 
    }

  }

 const isInvalid = !enteredNameIsValid && isTouched
  const nameInputClasses = isInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>

      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} ref={nameInputRef} />
      </div>
      {isInvalid && <p className='error-text'>you dont have anything</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
