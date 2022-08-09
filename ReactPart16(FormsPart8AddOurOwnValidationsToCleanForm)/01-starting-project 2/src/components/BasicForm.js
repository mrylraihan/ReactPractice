import React from 'react'
import useMyInput from '../hooks/use-my-Input';

const BasicForm = (props) => {

  const [fName, fNameChangeHandler, fNTouchedHandler, fNIsValid, fNHasError, fNReset] = useMyInput((a)=>a.trim()!=='')
  const [lName, lNameChangeHandler, lNTouchedHandler, lNIsValid, lNHasError, lNReset] = useMyInput((a)=>a.trim()!=='')
  const [email, emailChangeHandler, emailTouchedHandler, emailIsValid, emailHasError, emailReset] = useMyInput((a)=>a.includes('@'))

let formIsValid = false;
if(fNIsValid && lNIsValid && emailIsValid){
  formIsValid = true
}


  const onSubmitHandler = (e)=>{
    e.preventDefault()
    if(!fNIsValid && !lNIsValid && !emailIsValid){
      return 
    }

    fNReset()
    lNReset()
    emailReset()
  }

  const firstNClasses = fNHasError ? 'form-control invalid' : 'form-control';
  const lastNClasses = lNHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';



  return (
    <form onSubmit={onSubmitHandler}>
      {/* firstname */}
      <div className={firstNClasses}>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={fName} onBlur={fNTouchedHandler} onChange={fNameChangeHandler}/>
          {fNHasError && <p>you didnt write anything!</p>}
        </div>
        {/* lastName */}
        <div className={lastNClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lName} onChange={lNameChangeHandler} onBlur={lNTouchedHandler}/>
          {lNHasError && <p>you didnt write anything!</p>}
        </div>
      </div>
      {/* email */}
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onChange={emailChangeHandler} onBlur={emailTouchedHandler}/>
        {emailHasError && <p>Note an email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
