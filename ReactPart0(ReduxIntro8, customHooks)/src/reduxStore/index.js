import {createStore} from 'redux'

const initial = {
    name:'',
    show: true
}


const testReducer = (state, action)=>{
    if(action.type == 'name'){
        return {...state, name:action.name}
    }else if(action.type =='show'){
        return {...state, show:!state.show}
    }else{
        return initial
    }
}

const store = createStore(testReducer, initial)

export default store