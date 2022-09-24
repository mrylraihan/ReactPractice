import {createStore} from 'redux'

const initial = { name:'', toggle:true}

const reducer = (state, action)=>{
    if(action.type === 'name'){
        return {...state, name : action.nameInput}
    }else if(action.type === 'toggle'){
        return {...state, toggle: !state.toggle}
    }else {return initial}
}
const store = createStore(reducer, initial)

export default store