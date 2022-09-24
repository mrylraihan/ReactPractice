import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';//allows us to use a apart of our state 
import { INCREASE,INCREMENT,TOGGLE,DECREMENT } from '../store';

// how to access the store in our component 
const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);//how we pick with property of the state we want
  const show  = useSelector(state=>state.toggle)
  const state = useSelector(state=>state)
  console.log(state);
  const incrementHandler = () => {
    dispatch({ type: INCREMENT })
  };

  const downCounterHandler = () => {
    dispatch({ type: DECREMENT })
  };

  const increaseHandler = () => {
    dispatch({ type: INCREASE, amount: 5 })
  }
  const toggleCounterHandler = () => {
    dispatch({ type: TOGGLE })
  };
  

  console.log(counter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
