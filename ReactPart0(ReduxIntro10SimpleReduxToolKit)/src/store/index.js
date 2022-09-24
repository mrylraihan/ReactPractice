// import {createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initial = { name:'', toggle:true}

const simpleSlice = createSlice({
    name:'simpleSlice',
    initialState: initial,
    reducers:{
        getName(state,action){
            state.name = action.payload
        },
        toggleProp(state){
            state.toggle = !state.toggle
        }
    }
})

// const reducer = (state, action)=>{
//     if(action.type === 'name'){
//         return {...state, name : action.nameInput}
//     }else if(action.type === 'toggle'){
//         return {...state, toggle: !state.toggle}
//     }else {return initial}
// }
// const store = createStore(reducer, initial)

const store = configureStore({reducer: simpleSlice.reducer})
export const simpleActions = simpleSlice.actions
export default store