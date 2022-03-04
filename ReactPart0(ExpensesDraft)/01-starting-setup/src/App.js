import Expenses from './components/Expenses/Expenses';
import React, {useState} from 'react'
import NewExpense from './components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 294.67, date: new Date(2021, 9, 11) },
  { id: 'e2', title: 'New TV', amount: 314.99, date: new Date(2021, 1, 10) },
  { id: 'e3', title: 'Car Insurance', amount: 56.76, date: new Date(2021, 2, 18) },
  { id: 'e4', title: 'New Sit/Stand Desk(Ebony Wood)', amount: 235.36, date: new Date(2021, 2, 28) }
]

function App() {
 
const [expenses, setExpenses ]=useState(DUMMY_EXPENSES)
// // Without JSX
// return React.createElement('div',{}, 
// React.createElement('h2',{},'Lets get started!'),
// React.createElement(Expenses,{items:expenses}),
// React.createElement('p',{className: 'card', num:1},'ima a p Tag'));

// Using JSX 
const addExpenseHandler = expense =>{
  console.log('In App.js',expense);
  // setExpenses(expense)
  setExpenses(prevExpenses=>{
    return [expense, ...prevExpenses]
  })
};
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}
// or you can do it like this 
// const App = ()=>  (
//     <div>
//       <h2>Let's get started!</h2>
//     </div>
//   );

export default App;
