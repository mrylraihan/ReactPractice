import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, fullName: 'Wallie R.', toggle: true }

// call create slice , and store it somewhere
const counterSlice = createSlice({
    // every state slice needs a name
    name: 'counter',
    initialState: initialCounterState, // we need to set the initial state by passing the initial 
    // we already create up top
    // then we need to add reducers to all the reducers this state slice needs 
    reducers: {
        // now 4 methods because we have 4 different if cases before 
        // all method will receive the current state 
        increment(state) {
            // your allowed to mutate the state, will internally return the clone state and get back a new state object even though it looks like a its mutating the state 
            state.counter++;
        },
        decrease(state) {
            state.counter--
        },
        // if we need data thats attached ot the action we can accept it as a argument
        increase(state, action) {
            // state.counter = state.counter + action.payload.num//if we pass in an object
            state.counter = state.counter + action.payload//if we pass in an object
        },
        toggleCounter(state) {
            state.toggle = !state.toggle
        }
    }
})

export default counterSlice