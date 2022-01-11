import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import React, { useState } from 'react'

const ExpenseItem = (props) => {
	// const [title, setTitle] = React.useState(props.title)
	// const [title, setTitle] = useState(props.title)
	// console.log('Expenses Component being taken in affect: '+ props);
	//  console.log(props);
	// const clickHandler = () => {
	// 	let newTitle = title !== 'Updated!'? 'Updated!':props.title;
	// 	setTitle(newTitle)
	// 	console.log(title)
	// 	console.log(props);
	// };

	// you can only hav one root element being returned
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date}></ExpenseDate>
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>{props.amount}</div>
			</div>
			{/* <button onClick={clickHandler}>Click Title!</button> */}
		</Card>
	)
}
export default ExpenseItem
