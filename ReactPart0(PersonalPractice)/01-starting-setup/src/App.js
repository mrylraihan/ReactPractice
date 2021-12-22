import Car from "./components/Car";
import ExpenseItem from "./components/ExpenseItem";
import NestArray from "./components/NestArray";
import TestArray from "./components/TestArray";
import GundamIteration from "./components/GundamIteration";
import {Welcome, Goodbye, NameCheck}from "./components/Welcome";
import Test1 from "./components/Test1";


const p1 = {name:'Wallie'}

const stuff = {
  title: "things to do",
  stufflist: ['stuff', 'Laundry', 'cooking']
}
const funStuff = {
  title: "Fun things 2 do",
  stufflist: ['study', 'work out', 'coding']
}
function App() {
  return (
    <div>
      <h1>Let's get started!</h1>
      <ExpenseItem />
      <Car carName={'Mustang'} cost={2000} type={'muscle'}/>
      <ul>
      <TestArray />
      </ul>
        <NestArray />
        <GundamIteration />
      <Welcome name={p1.name}></Welcome>
      <Goodbye name={p1.name}></Goodbye>
      <NameCheck name={p1.name}></NameCheck>
      <Test1 stuff={stuff}></Test1>
      <Test1 stuff={funStuff}></Test1>
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
