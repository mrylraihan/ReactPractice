import Car from "./components/Car";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h1>Let's get started!</h1>
      <ExpenseItem />
      <Car carName={'Mustang'} cost={2000} type={'muscle'}/>
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
