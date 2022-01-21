import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense}) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log('in NewExpense', expenseData);
        onAddExpense(expenseData)
    }

    const startHandlingForm=()=>{
        setIsEditing(true)
    }
    const stopHandlingForm=()=>{
        setIsEditing(false)
    }

    return <div className='new-expense'>
        {/* <form></form> to keep these components lean we will put the form logic in another component*/}
       {!isEditing && <button onClick={startHandlingForm}>Add New Expense</button>}
       {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopHandlingForm}/>}
     
    </div>
};

export default NewExpense