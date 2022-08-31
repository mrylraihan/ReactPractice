import {createStore} from 'redux'

const initial = {
    name:''
}


const nameReducer = (state, action)=>{
    if(action.type == 'name'){
        return {...state, name: action.n}
    }
    return initial
}

const store = createStore(nameReducer, initial)

export default store