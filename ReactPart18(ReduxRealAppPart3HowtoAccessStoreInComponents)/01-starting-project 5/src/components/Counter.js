import classes from './Counter.module.css';
import { useStore } from 'react-redux'// allows us to access the whole state object
import { useSelector } from 'react-redux';//allows us to use a apart of our state 
// how to access the store in our component 
const Counter = () => {
  const test = useStore()
  const counter = useSelector(state=> state.counter);//how we pick with property of the state we want

  const toggleCounterHandler = () => {
    test.dispatch({type:'increment'})
  };
  const downCounterHandler = () => {
    test.dispatch({type:'decrement'})
  };

  console.log(test.getState());
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={downCounterHandler}>Toggle Downward</button>
    </main>
  );
};

export default Counter;
