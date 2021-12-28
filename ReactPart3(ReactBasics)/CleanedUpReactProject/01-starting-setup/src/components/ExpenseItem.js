import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'
import React, { useState } from 'react'

const ExpenseItem = (props) => {
	// const [title, setTitle] = React.useState(props.title)
	const [title, setTitle] = useState(props.title)
	const clickHandler = () => {
		
		// if(title !== 'updated!'){
		// 	setTitle('updated!')
		// }else{
		// 	setTitle(props.title)
		// }

		let newTitle = title !== 'updated!'? 'updated!':props.title;

		setTitle(newTitle)
		// const newTitle = oldTitle === 'updated!' ? title : otherTitle;

		console.log(title)
	};

	// you can only hav one root element being returned
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date}></ExpenseDate>
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>{props.amount}</div>
			</div>
			<button onClick={clickHandler}>Click Title!</button>
		</Card>
	)
}
export default ExpenseItem
