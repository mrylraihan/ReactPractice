import {createSlice, configureStore} from '@reduxjs/toolkit'

const initial = {
    firstName:'',
    lastName:'',
    fullName:'',
    toggle:true
}

const simpleSlice = createSlice({
    name:'simpleSlice',
    initialState:initial,
    reducers:{
        getFirstName(state, action){
            return {...state, firstName: action.payload.first}
        },
        getLastName(state, action){
            return {...state, lastName: action.payload.last}
        },
        getFullName(state){
            return {...state, fullName:`${state.firstName} ${state.lastName}`, firstName:'', lastName:''}
        },
        getToggle(state){
            return {...state, toggle:!state.toggle}
        }
    }
})

const store = configureStore({reducer:{simple: simpleSlice.reducer}})
export const simpleActions = simpleSlice.actions

export default store