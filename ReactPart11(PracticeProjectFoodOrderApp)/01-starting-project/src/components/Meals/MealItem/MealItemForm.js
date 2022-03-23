import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';

function MealItemForm(props) {
   const amountInputRef =  useRef()
   const [amountIsValid, setAmountIsValid] = useState(true)
   
    const submitHandler = event =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        console.log(enteredAmount);//is string and always will be regardless is we put input type number 
        console.log(+enteredAmount);//converts the input type to an actual number
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber <1 || enteredAmountNumber> 5){
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber)
    };

    return ( <form className={classes.form} onSubmit={submitHandler}>
        {/* this input:{object} will be what configures the input fields in our Input component */}
        <Input ref={amountInputRef} label="Amount" input={{
            id:'amount_' + props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount!(1-5)</p>}
    </form> );
}

export default MealItemForm;