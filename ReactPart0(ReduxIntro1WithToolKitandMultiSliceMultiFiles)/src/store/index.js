import {configureStore} from '@reduxjs/toolkit'
import nameReducer from './name-slice'
import toggleReducer from './toggle-slice'  



const store = configureStore({reducer:{
    name: nameReducer,
    toggle:toggleReducer
}})



export default store