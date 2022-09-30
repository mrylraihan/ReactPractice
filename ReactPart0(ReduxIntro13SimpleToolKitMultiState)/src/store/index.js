// import {createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initial = {
    firstName: '',
    lastName: '',
    fullName: '',
}

const initial2 = {
    toggle: true
}

const toggleSlice = createSlice({
    name:'toggleSlice',
    initialState:initial2,
    reducers:{
    toggleName(state) {
        return { ...state, toggle: !state.toggle }
    }
    }
})

const nameSlice = createSlice({
    name:'nameSlice',
    initialState:initial,
    reducers:{
        getFirstName(state, action){
            return { ...state, firstName: action.payload.first }
        },
        getLastName(state, action){
            return { ...state, lastName: action.payload.last }
        },
        getFullName(state){
            return { ...state, fullName: `${state.firstName} ${state.lastName}`, firstName: '', lastName: '' }
        }
    }
})

const store = configureStore({reducer: {
    name: nameSlice.reducer, 
    toggle: toggleSlice.reducer
}})

export const nameActions = nameSlice.actions
export const toggleActions = toggleSlice.actions
export default store;