import React, {useState} from 'react';
import TodoList from './components/TodoList.jsx'
import TodoForm from './components/TodoForm.jsx'
import './App.css';

const DummyData = [
  {id:0, title:'Do laundry'},
  {id:1, title:'clean the house'},
  {id:2, title:'organize the garage'},
]
function App() {
  const [todo, setToDo] = useState(DummyData)
  console.log(todo);
  return (
    <>
    <div className="app">
      <h1>To do List!</h1>
    </div>
      <TodoForm setToDo={setToDo}></TodoForm>
      <TodoList setToDo={setToDo} list={todo}></TodoList>
    </>
  );
}

export default App;
