import {createSlice, configureStore} from '@reduxjs/toolkit'

const inital1 = {
    count:0
}

const inital2 = {
    toggleCount:true
}

const countSlice = createSlice({
    name:'count',
    initialState:inital1,
    reducers:{
        sumUp(state){
            return {...state, count:state.count + 1}
        },
        sumDown(state){
            return { ...state, count: state.count - 1 }
        },
        sumInput(state, action){
            return { ...state, count: state.count + action.payload }
        }
    }
})

const toggleSlice = createSlice({
    name:'toggle',
    initialState:inital2,
    reducers:{
        toggleState(state){
            return { ...state, toggleCount: !state.toggleCount }
        }
    }
})

const store = configureStore({reducer: {
    count:countSlice.reducer,
    toggle:toggleSlice.reducer
}})


export const countActions = countSlice.actions
export const toggleAction = toggleSlice.actions
export default store;