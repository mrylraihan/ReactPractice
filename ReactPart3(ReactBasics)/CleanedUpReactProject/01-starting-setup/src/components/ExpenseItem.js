import './ExpenseItem.css' 
import ExpenseDate from './ExpenseDate'
import Card from './Card'

const ExpenseItem = (props) => {
	// const month = props.date.toLocaleString('en-US', { month: 'long' })
	// const year = props.date.getFullYear()
	// const day = props.date.toLocaleString('en-US', { day: '2-digit' })
	
	// you can only hav one root element being returned
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date}></ExpenseDate>
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>{props.amount}</div>
			</div>
		</Card> 
	)
}
export default ExpenseItem
