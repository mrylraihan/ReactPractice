import {createSlice} from '@reduxjs/toolkit'

const initial = {
    toggle: true
}

const toggleSlice = createSlice({
    name:'toggleSlice', 
    initialState:initial,
    reducers:{
        getToggle(state) {
            return { ...state, toggle: !state.toggle }
        }
    }
})

export const toggleActions = toggleSlice.actions

export default toggleSlice.reducer