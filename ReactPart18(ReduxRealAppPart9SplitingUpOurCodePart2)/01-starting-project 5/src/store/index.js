// create a store
// create a ruducer
// then dont subscribe though we will 
// import {createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import redux from 'redux'
import authReducer from './auth'
import counterReducer from './counter'


const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
}//if only one this is fine 
    //if multiple 
    // reducer:{counter:counterSlice.reducer, etc:etc}//basically a map of reducers
})

// we need ot export this to provide the store to the react app 

export default store;
// now where do we import our store to use it