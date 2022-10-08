import {createStore} from 'redux'

const initial = {
    firstName:'',
    lastName:'',
    fullName:'',
    toggle:true
}


const reducer = (state, action)=>{
    if(action.type == 'ft'){
        return {...state, firstName: action.first}
    } else if (action.type == 'lt') {
        return { ...state, lastName: action.last }
    }else if(action.type == 'fl'){
        return { ...state, fullName: (state.firstName && state.lastName) ? `${state.firstName} ${state.lastName}` : state.fullName  , firstName:'', lastName:'' }
    }else if(action.type == 'tg'){
        return {...state, toggle: !state.toggle}
    }else{
        return initial
    }
}

const store = createStore(reducer, initial)

export default store