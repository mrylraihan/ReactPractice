import React from 'react';
import classes from './Input.module.css'

// so we can forward teh ref from MealItemFrom.js
// this is why we get the second param ref next to our prop, and pass it on the input
const Input = React.forwardRef( (props,ref) =>{

    return (
        <div className={classes.input}>
            {/* the input prop is configuration data used to configure the label and input which is why we use props.input.id then {...props.input on the input field} */}
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* the spread operator is a little trick to take all the config data and it will keep the same prop names, this insure all the keyvalue pairs we passed in to input will make sure the same keyvalue pair is added*/}
            <input ref={ref} {...props.input}/>
        </div>
    )
})
export default Input