import React, { useRef, useState } from 'react'


const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('') //working with onChange meaning every key stroke 

  const nameInputChangeHandler = event =>{
    setEnteredName(event.target.value)
  }

// console.log(enteredName);//will log event time the state changes because the component is getting rerendered 

  const formSubmissionHandler = event =>{
    event.preventDefault()
      console.log(enteredName);//Only when the form is submitted it will log the state value
      setEnteredName('')//resetting the enteredName state 
      const enteredValue = nameInputRef.current.value
      console.log(enteredValue);//Only when the form is submitted it will log the ref value
      nameInputRef.current.value = ''//resetting the nameInputRef value 
   
  }


  return (
    <form onSubmit={formSubmissionHandler}>
      
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} ref={nameInputRef}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
