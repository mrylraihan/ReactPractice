import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';//allows us to use a apart of our state 
// how to access the store in our component 
const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);//how we pick with property of the state we want
  const toggle  = useSelector(state=>state.toggle)
  const state = useSelector(state=>state)
  console.log(state);
  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  };

  const downCounterHandler = () => {
    dispatch({ type: 'decrement' })
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 })
  }
  const toggleCounterHandler = () => {
    dispatch({ type:'toggle'})
  };
  

  console.log(counter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Toggle Counter Up</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={downCounterHandler}>Toggle Downward</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      
      </div>
    </main>
  );
};

export default Counter;
