import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';//allows us to use a apart of our state 
// how to access the store in our component 
const Counter = () => {

  const counter = useSelector(state=> state.counter);//how we pick with property of the state we want
  const dispatch = useDispatch()
  const toggleCounterHandler = () => { 
    dispatch({type:'increment'})
  };
  const downCounterHandler = () => {
    dispatch({type:'decrement'})
  };

  const increaseHandler = ()=>{
    dispatch({type:'increase', amount: 5})
  }

  console.log(counter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={increaseHandler}>Increase by 5</button>
      <button onClick={downCounterHandler}>Toggle Downward</button>
    </main>
  );
};

export default Counter;
