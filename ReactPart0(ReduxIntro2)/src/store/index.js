import { createStore } from 'redux'


const initial = {
    firstName:'', 
    lastName:''
}
const countReducer = (state, action)=>{
    if(action.type === 'first'){
        return {...state, firstName: action.first }
    } else if (action.type === 'last') {
        return { ...state, lastName: action.last }
    }else if (action.type === 'full') {
        return { ...state, fullName: `${state.firstName} ${state.lastName}` }
    }
        return state
    
}
const store = createStore(countReducer, initial )


export default store