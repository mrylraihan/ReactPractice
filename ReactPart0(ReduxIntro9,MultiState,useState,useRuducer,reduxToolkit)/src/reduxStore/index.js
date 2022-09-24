// import {createStore} from 'redux'
import {createSlice , configureStore} from '@reduxjs/toolkit'

const initialState = {
    firstName: '',
    lastName: '',
    fullName: '',
    toggleName:true
}

const nameSlice = createSlice({
    name:'names',
    initialState,
    reducers:{
        getFirstName(state, action){
            state.firstName = action.payload.fn
        },
        getLastName(state, action){
            state.lastName = action.payload.ln
        },
        getFullName(state){
            state.fullName = state.firstName && state.lastName ? `${state.firstName} ${state.lastName}` : state.fullName
            state.firstName = ''
            state.lastName = ''
        },
        toggleFeature(state){
            state.toggleName = !state.toggleName
        }
    }
})

// const reducer = (state, action) => {
//     if (action.type == 'fname') {
//         return { ...state, firstName: action.fname }
//     } else if (action.type == 'lname') {
//         return { ...state, lastName: action.lname }
//     } else if (action.type == 'full') {
//         return { ...state, fullName: state.firstName && state.lastName ? `${state.firstName} ${state.lastName}` : state.fullName, firstName: '', lastName: '' }
//     } else {
//         return initial
//     }
// }
// const store = createStore(reducer, initial)

const store = configureStore({
    reducer : nameSlice.reducer
})

export const nameActions = nameSlice.actions
export default store