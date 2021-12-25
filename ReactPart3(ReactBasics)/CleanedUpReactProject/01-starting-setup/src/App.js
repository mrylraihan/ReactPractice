import Expenses from "./components/Expenses";
// import Car from "./components/Car";



function App() {
 
const expenses = [
  { id:'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 9, 11) },
  { id:'e2', title: 'Home Insurance', amount: 314.99, date: new Date(2021, 1, 10) },
  { id:'e3', title: 'Health Insurance', amount: 56.76, date: new Date(2021, 2, 18) },
  { id:'e4', title: 'life Insurance', amount: 56.76, date: new Date(2021, 2, 28) }
]

  return (
    <div>
      {/* <Car carName={'Mustang'} cost={2000} type={'muscle'} /> */}
      <h1>Let's get started!</h1>
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
