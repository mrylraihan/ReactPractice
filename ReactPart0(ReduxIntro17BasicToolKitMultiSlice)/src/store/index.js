import { configureStore} from '@reduxjs/toolkit'
import simpleReducer from './simple-slice'
import toggleReducer from './toggle-slice'


const store = configureStore({reducer:
    {
    simple: simpleReducer,
    toggle: toggleReducer
    }
})


export default store