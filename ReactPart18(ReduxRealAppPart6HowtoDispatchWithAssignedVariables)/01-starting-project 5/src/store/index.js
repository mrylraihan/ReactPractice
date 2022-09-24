// create a store
// create a ruducer
// then dont subscribe though we will 
import {createStore} from 'redux'
// import redux from 'redux'

const initial = {counter:0, fullName:'Wallie R.', toggle:false}

export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
export const INCREASE = 'increase'
export const TOGGLE = 'toggle'

const countReducer = (state, action)=>{
    if (action.type === INCREMENT){
        return {...state, counter :state.counter + 1}
    }else if(action.type === DECREMENT){
        return {...state, counter :state.counter - 1}
    }else if(action.type === INCREASE){
        return {...state,counter :state.counter + action.amount}
    }else if(action.type === TOGGLE){
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