import Card from "../UI/Card"
import ExpensesFilter from "./ExpenseFilter"
import './Expenses.css'
import React , {useState} from "react"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

const Expenses = (props)=>{
    const [filteredYear, setFilteredYear] = useState('2020')
    

    // const mapAllExpense = props.items.map(ele=>{
    //     return <ExpenseItems key={ele.title} title={ele.title} amount={ele.amount} date={ele.date} />
    // })
    const filterChangeHandler = selectedYear =>{
        console.log('Expenses.js');
        setFilteredYear(selectedYear);
    }
    const filteredItems = props.items.filter(item => {
        return ""+item.date.getFullYear() === filteredYear
    })
    
    //   const mapFilteredExpense = filteredItems.map(ele=>{
    //     return <ExpenseItems key={ele.title} title={ele.title} amount={ele.amount} date={ele.date} />
    // })


    return ( 
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {/* {mapAllExpense} */}
            <ExpensesChart expenses={filteredItems}></ExpensesChart>
            <ExpensesList fItems={filteredItems}/>
           
            {/* <ExpenseItems title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />

<ExpenseItems title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />

<ExpenseItems title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />

<ExpenseItems title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
        </Card>
    )
}

export default Expenses