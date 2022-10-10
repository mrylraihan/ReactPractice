import {configureStore} from '@reduxjs/toolkit'
import nameReducers from './name-slice'
import toggleReducers from './toggle-slice'

const store = configureStore({reducer:{
    name:nameReducers,
    toggle:toggleReducers,
}})


export default store