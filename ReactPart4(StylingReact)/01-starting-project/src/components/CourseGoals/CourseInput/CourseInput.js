import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';we dont need this anymore because we are using
// styled components import and we styling them directly 
import styled from 'styled-components'
import Button2 from '../../UI/Button2';
import styles from './CourseInput.module.css'

const FormControl = styled.form`

  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color:${props=> props.invalid? 'salmon': 'black'}
}

& input {
  display: block;
  width: 100%;
  border: 3px solid ${props=> props.invalid ? 'yellow': 'grey'};
  background: ${props => props.invalid ? 'salmon' : 'transparent'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid ,setIsValid]= useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* adding class dynamically */}
      {/* allows us to dynamically add styling if isValid is true add an empty string is false then add invalid class */}
      {/* two ways of doing this */}
      {/* <FormControl className={!isValid && 'invalid'}> */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler}/>
      </div>
      {/* <Button type="submit">Add Goal</Button> */}
      <Button2 type='submit'></Button2>
    </form>

    // how to add styles directly dynamically 
    // <form onSubmit={formSubmitHandler}>
    //   <div className="form-control">
    //     <label style={{ color: !isValid? 'red':'black'}}>Course Goal</label>
    //     <input type="text" value={enteredValue} style={{ background: !isValid ? 'salmon' : 'transparent', borderColor: !isValid ? 'yellow' : 'black' }} onChange={goalInputChangeHandler}/>
    //   </div>
    //   <Button type="submit">Add Goal</Button>
    // </form>
  );
};

export default CourseInput;
