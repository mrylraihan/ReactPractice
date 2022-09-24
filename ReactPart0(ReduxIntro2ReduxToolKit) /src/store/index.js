// import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initial = {
    firstName:'', 
    lastName:'',
    fullName:''
}

const nameSlice = createSlice({
    name:'names',
    initialState:initial,
    reducers:{
        getFirstName(state, action){
            state.firstName =  action.payload
        },
        getLastName(state, action){
            state.lastName =  action.payload
        },
        getFullName(state){
            state.fullName = `${state.firstName} ${state.lastName}`
            state.firstName = ''
            state.lastName = ''
        }
        
    }
})

// const countReducer = (state, action)=>{
//     if(action.type === 'first'){
//         return {...state, firstName: action.first }
//     } else if (action.type === 'last') {
//         return { ...state, lastName: action.last }
//     }else if (action.type === 'full') {
//         return { ...state, fullName: `${state.firstName} ${state.lastName}` }
//     }
//         return state
    
// }
// const store = createStore(countReducer, initial )

const store = configureStore({
    reducer : nameSlice.reducer
})

export const nameActions = nameSlice.actions
export default store