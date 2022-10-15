import {configureStore} from '@reduxjs/toolkit'
import nameReducer from './nameSlice'
import toggleReducer from './toggleSlice'


const store = configureStore({reducer: {
    nameState: nameReducer,
    toggleState: toggleReducer
}})

export default store 