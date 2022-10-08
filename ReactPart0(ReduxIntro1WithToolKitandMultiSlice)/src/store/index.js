import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialNameState = {
    firstName:'',
    lastName:'',
    fullName:'',
}

const initialToggleState = {
    toggle: true
}

const nameSlice = createSlice({
name:'nameSlice',
initialState:initialNameState,
reducers:{
    getFirstName(state, action){
        return { ...state, firstName: action.payload.first }
    },
    getLastName(state, action){
        return { ...state, lastName: action.payload.last }
    },
    getFullName(state){
        return { ...state, fullName: (state.firstName && state.lastName) ? `${state.firstName} ${state.lastName}` : state.fullName, firstName: '', lastName: '' }
    },
}
})

const toggleSlice = createSlice({
    name: 'toggleSlice',
    initialState: initialToggleState,
    reducers: {
        getToggle(state){
            return {...state, toggle:!state.toggle}
        }
    }
})


// const reducer = (state, action)=>{
//     if(action.type == 'ft'){
//         return {...state, firstName: action.first}
//     } else if (action.type == 'lt') {
//         return { ...state, lastName: action.last }
//     }else if(action.type == 'fl'){
//         return { ...state, fullName: (state.firstName && state.lastName) ? `${state.firstName} ${state.lastName}` : state.fullName  , firstName:'', lastName:'' }
//     }else if(action.type == 'tg'){
//         return {...state, toggle: !state.toggle}
//     }else{
//         return initial
//     }
// }

const store = configureStore({reducer:{
    name:nameSlice.reducer,
    toggle:toggleSlice.reducer
}})
export const nameActions = nameSlice.actions;
export const toggleActions = toggleSlice.actions;

export default store