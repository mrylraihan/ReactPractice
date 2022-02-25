import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

// we create this outside of the component because we wont need any data thats generated from the actual component, so the reducer function can be created outside of the scope of the component function, all the data required for the reducer function will passed in by react
const emailReducer =(state, action)=>{
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid : state.value.includes('@')}
  }
  return {value: '', isValid: false}
};

const passwordReducer = (state, action)=>{
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.length > 6}
  }
  if(action.type === 'INPUT_BLUR'){
    return { value: state.val, isValid: state.value.length > 6 }
  }
  return {value:'', isValid: false}
}

const Login = (props) => {
  // we dont need any of these anymore because we are combining both the state for the input and validation in one
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const authCtx = useContext(AuthContext)

  // useReducer for email                       reducerFunction, initial value
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false })
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: false })

  const {isValid: emailIsValid} = emailState
  const {isValid: passwordIsValid}= passwordState
  useEffect(()=>{
    console.log('In useEffect');
    const identifier = setTimeout(()=>{
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
      console.log('in timer');
    }, 500)
    return ()=>{console.log('Clean up!');
    clearTimeout(identifier)
  }
  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val : event.target.value})
  
      // setFormIsValid(
      //   event.target.value.includes('@') && passwordState.isValid
      // )
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value })
    
    // setFormIsValid(
    //     emailState.isValid && event.target.value.trim().length > 4
    //   );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
