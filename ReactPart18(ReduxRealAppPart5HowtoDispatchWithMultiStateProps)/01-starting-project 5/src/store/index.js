// create a store
// create a ruducer
// then dont subscribe though we will 
import {createStore} from 'redux'
// import redux from 'redux'

const initial = {counter:0, fullName:'Wallie R.', toggle:false}

const countReducer = (state, action)=>{
    if(action.type === 'increment'){
        return {...state, counter :state.counter + 1}
    }else if(action.type === 'decrement'){
        return {...state, counter :state.counter - 1}
    }else if(action.type === 'increase'){
        return {...state,counter :state.counter + action.amount}
    }else if(action.type === 'toggle'){
        return {...state,toggle: !state.toggle}
    }
    return state
}
// either way it just depends how u import it at the top, we destructured the method out of redux
// const store = redux.createStore(countReducer, initial)
const store = createStore(countReducer, initial)

// we need ot export this to provide the store to the react app 
export default store;
// now where do we import our store to use it