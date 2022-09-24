// create a store
// create a ruducer
// then dont subscribe though we will 
// import {createStore} from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'
// import redux from 'redux'

const initial = {counter:0, fullName:'Wallie R.', toggle:true}

// call create slice , and store it somewhere

const counterSlice = createSlice({
    // every state slice needs a name
    name:'counter',
    initialState: initial, // we need to set the initial state by passing the initial 
    // we already create up top
    // then we need to add reducers to all the reducers this state slice needs 
    reducers:{
        // now 4 methods because we have 4 different if cases before 
        // all method will receive the current state 
        increment(state){
            // your allowed to mutate the state, will internally return the clone state and get back a new state object even though it looks like a its mutating the state 
            state.counter++;
        },
        decrease(state){
            state.counter--
        },
        // if we need data thats attached ot the action we can accept it as a argument
        increase(state, action){
            // state.counter = state.counter + action.payload.num//if we pass in an object
            state.counter = state.counter + action.payload//if we pass in an object
        },
        toggleCounter(state){
           state.toggle = !state.toggle
        }
    }
})

// const countReducer = (state, action)=>{
//     if(action.type === 'increment'){
//         return {...state, counter :state.counter + 1}
//     }else if(action.type === 'decrement'){
//         return {...state, counter :state.counter - 1}
//     }else if(action.type === 'increase'){
//         return {...state,counter :state.counter + action.amount}
//     }else if(action.type === 'toggle'){
//         return {...state,toggle: !state.toggle}
//     }
//     return state
// }

// either way it just depends how u import it at the top, we destructured the method out of redux
// const store = redux.createStore(countReducer, initial)
// const store = createStore(countReducer, initial)

// because of this we dont have to worry about coming up with different action types or identifiers 
// this actions property will hold all of our methods and we can dispatch them as we please
// counterSlice.actions.toggleCounter this will be out dispatch to trigger different actions 

const store = configureStore({
    reducer: counterSlice.reducer//if only one this is fine 
    //if multiple 
    // reducer:{counter:counterSlice.reducer, etc:etc}//basically a map of reducers
})

// we need ot export this to provide the store to the react app 
export const countActions = counterSlice.actions//so we can dispatch actions
export default store;
// now where do we import our store to use it