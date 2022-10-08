import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';//allows us to use a apart of our state 
import {countActions} from '../store/counter'

// how to access the store in our component 
const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter);//how we pick with property of the state we want
  const show  = useSelector(state=>state.counter.toggle)
  const state = useSelector(state=>state)
  console.log(state,' as a whole');
  console.log(state.counter, 'just the counter');
  console.log(state.auth,'just the auth');

  const incrementHandler = () => {
    // dispatch({ type: 'increment' })
    dispatch(countActions.increment())
  };

  const downCounterHandler = () => {
    // dispatch({ type: 'decrement' })
    dispatch(countActions.decrease())
  };

  const increaseHandler = () => {
    // dispatch({ type: 'increase', amount: 5 })
    // dispatch(countActions.increase({num:10}))//if we want to pass in an object
    dispatch(countActions.increase(5))
  }
  const toggleCounterHandler = () => {
    // dispatch({ type:'toggle'})
    dispatch(countActions.toggleCounter())
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
