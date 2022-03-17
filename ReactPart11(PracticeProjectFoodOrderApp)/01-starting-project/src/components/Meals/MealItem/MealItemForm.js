import React from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';

function MealItemForm() {
    return ( <form className={classes.form}>
        {/* this input:{object} will be what configures the input fields in our Input component */}
        <Input label="Amount" input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button>+ Add</button>
    </form> );
}

export default MealItemForm;