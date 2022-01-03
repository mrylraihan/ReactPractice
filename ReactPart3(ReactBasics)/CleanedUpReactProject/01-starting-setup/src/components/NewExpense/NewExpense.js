import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    return <div className='new-expense'>
        {/* <form></form> to keep these components lean we will put the form logic in another component*/}
        <ExpenseForm/>
    </div>
};

export default NewExpense