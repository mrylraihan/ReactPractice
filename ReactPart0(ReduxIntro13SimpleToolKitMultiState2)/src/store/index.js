import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialName = {
    firstName:'',
    lastName:''
}

const initialToggle = {
    toggle:true
}

const nameSlice = createSlice({
    name:'name',
    initialState:initialName,
    reducers:{
        getFirstName(state, action){
            return {...state, firstName: action.payload.first}
        },
        getLastName(state, action){
            return { ...state, lastName: action.payload.last }
        }
    }
})

const toggleSlice = createSlice({
    name:'toggle',
    initialState:initialToggle,
    reducers:{
        getToggle(state){
            return {...state,toggle: !state.toggle}
        }
    }
})

const store = configureStore({reducer:{
    name:nameSlice.reducer,
    toggle:toggleSlice.reducer
}})

export const nameActions = nameSlice.actions
export const toggleActions = toggleSlice.actions

export default store