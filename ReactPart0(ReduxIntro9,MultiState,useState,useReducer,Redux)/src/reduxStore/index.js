import {createStore} from 'redux'

const initial = {
    firstName: '',
    lastName: '',
    fullName: ''
}
const reducer = (state, action) => {
    if (action.type == 'fname') {
        return { ...state, firstName: action.fname }
    } else if (action.type == 'lname') {
        return { ...state, lastName: action.lname }
    } else if (action.type == 'full') {
        return { ...state, fullName: state.firstName && state.lastName ? `${state.firstName} ${state.lastName}` : state.fullName, firstName: '', lastName: '' }
    } else {
        return initial
    }
}
const store = createStore(reducer, initial)
export default store