import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense}) => {
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log('in NewExpense', expenseData);
        onAddExpense(expenseData)
    }
    return <div className='new-expense'>
        {/* <form></form> to keep these components lean we will put the form logic in another component*/}
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
};

export default NewExpense