import React from "react"
import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'

const ExpensesList =(props)=>{
    const mapFilteredExpense = props.fItems.map(ele => {
        return <ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date} />
    })


    let expensesContent = <h2 className="expenses-list__fallback">No data Available</h2>

    if (props.fItems.length === 0) {
       return  <ul>
           {expensesContent}
       </ul>

        // expensesContent = props.fItems.map(ele => {
        //     return <ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date} />
        // })
    }
    return (<ul className="expenses-list">
        {mapFilteredExpense}
    </ul>
    )

}

export default ExpensesList