// create a store
// create a ruducer
// then dont subscribe though we will 
// import {createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import redux from 'redux'
import authSlice from './auth-slice'
import counterSlice from './counter-slice'


const store = configureStore({
    reducer: {counter: counterSlice.reducer,
              auth: authSlice.reducer}//if only one this is fine 
    //if multiple 
    // reducer:{counter:counterSlice.reducer, etc:etc}//basically a map of reducers
})

// we need ot export this to provide the store to the react app 
export const countActions = counterSlice.actions//so we can dispatch actions
export const authActions = authSlice.actions
export default store;
// now where do we import our store to use it