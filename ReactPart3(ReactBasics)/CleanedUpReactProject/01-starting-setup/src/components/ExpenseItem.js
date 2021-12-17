import './ExpenseItem.css' 

const ExpenseItem = () => {
	const expenseDate = new Date(2021, 2, 28);
	const expenseTitle = 'Car Insurance'
	const expenseAmount = 294.67;
	// you can only hav one root element being returned
	return (
		<div className="expense-item">
			<div>{""+expenseDate}</div>
			<div className='expense-item__description'>
				<h2>{expenseTitle}</h2>
				<div className='expense-item__price'>{expenseAmount}</div>
			</div>
		</div>
	)
}
export default ExpenseItem
