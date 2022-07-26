import {useRef,useState } from 'react'

const SimpleInput = (props) => {
const [enterName, setEnteredName] = useState('')
  const nameInputRef = useRef()

const nameInputChangeHandler = event=>{
  setEnteredName(event.target.value)
}

const formSubmissionHandler = event=>{
  event.preventDefault()
  // if you need every keystroke for example your going to validate it on every keystroke the state is better. 
  console.log(enterName, ' state');
  setEnteredName('')
  // if you need the value only once then a ref is better 
  console.log(nameInputRef.current.value, ' ref');
  // nameInputRef.current.value = ''// this manipulates the dom though so not ideal
  
}

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'  ref={nameInputRef}  value={enterName} onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
