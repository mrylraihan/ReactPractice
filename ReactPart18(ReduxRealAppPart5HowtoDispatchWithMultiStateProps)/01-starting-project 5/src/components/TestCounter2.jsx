import React from 'react'
import classes from './Counter.module.css';
import {useSelector} from 'react-redux'

function TestCounter2() {
  const name = useSelector(state=>state.fullName)
    const count = useSelector(state=>state.counter)
  return (
      <main className={classes.counter}>
    <div>
        <h1>TestCounter2</h1>
        <h1>useSelector()</h1>
        <p>using the useSelector which when triggered by a dispatch or has a state change will automatically rendered the component and render the latest state updates </p>
        <h1>{count}</h1>
        <h1>{name}</h1>
    </div>
    </main>
  )
}

export default TestCounter2