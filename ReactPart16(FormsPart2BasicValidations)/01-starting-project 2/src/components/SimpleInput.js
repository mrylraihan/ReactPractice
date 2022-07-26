import {useRef,useState } from 'react'

const SimpleInput = (props) => {
const [enterName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)
  const nameInputRef = useRef()

const nameInputChangeHandler = event=>{
  setEnteredName(event.target.value)
  setEnteredNameIsValid(true)
}

const formSubmissionHandler = event=>{
  event.preventDefault()
  if(enterName.trim() === ''){
    setEnteredNameIsValid(false)
    return
  }
  // if you need every keystroke for example your going to validate it on every keystroke the state is better. 
  console.log(enterName, ' state');
  setEnteredName('')
 
}
const nameInputClasses = enteredNameIsValid ? 'form-control':'form-control invalid'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'  ref={nameInputRef}  value={enterName} onChange={nameInputChangeHandler} />
        {!enteredNameIsValid && <p className='error-text'>you did'nt write anything!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
