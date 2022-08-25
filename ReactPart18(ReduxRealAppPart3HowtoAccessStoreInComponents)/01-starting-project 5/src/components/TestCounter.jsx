import React from 'react'
import classes from './Counter.module.css';
import {useStore} from 'react-redux'

function TestCounter() {
    const store = useStore()
    const result = store.getState()
    // only gets the initial state so it wont change or get the lates 
  return (
      <main className={classes.counter}>
    <div>
        <h1>TestCounter</h1>
        <h1>useStore()</h1>
        <p>using only useStore which doesnt get the latest state updates and renders when the state is modified or a dispatch is triggered </p>
        <h1>{result.counter}</h1>
        <h1>{result.fullName}</h1>
    </div>
    </main>
  )
}

export default TestCounter