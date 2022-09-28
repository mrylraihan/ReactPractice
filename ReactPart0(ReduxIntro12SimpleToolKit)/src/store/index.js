// import {createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initial = {
    firstName: '',
    lastName: '',
    fullName: '',
    toggle: true
}

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
        },
        toggleName(state){
            return { ...state, toggle: !state.toggle }
        }
    }
})

const store = configureStore({reducer: nameSlice.reducer})
export const nameActions = nameSlice.actions
export default store;