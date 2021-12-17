import './ExpenseItem.css' 

const ExpenseItem = () => {
	// you can only hav one root element being returned
	return (
		<div className="expense-item">
			<div>March 28th 2021</div>
			<div className='expense-item__description'>
				<h2>Car insurance</h2>
				<div className='expense-item__price'>$292.34</div>
			</div>
		</div>
	)
}
export default ExpenseItem
