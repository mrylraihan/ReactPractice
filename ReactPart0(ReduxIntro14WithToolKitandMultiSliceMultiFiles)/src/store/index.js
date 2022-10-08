import {configureStore} from '@reduxjs/toolkit'
import listReducer from './list-slice'
import toggleReducer from './toggle-slice'
import nameReducer from './name-slice'

// configure store
const store = configureStore({reducer:{
    toggle: toggleReducer,
    name: nameReducer,
    list: listReducer
}})


// dispatch our actions 
export default store