// create a store
// create a ruducer
// then dont subscribe though we will 
import {createStore} from 'redux'
// import redux from 'redux'

const initial = {counter:0}

const countReducer = (state, action)=>{
    if(action.type === 'increment'){
        return {counter :state.counter + 1}
    }else if(action.type === 'decrement'){
        return {counter :state.counter - 1}
    }
    return state
}
// either way it just depends how u import it at the top, we destructured the method out of redux
// const store = redux.createStore(countReducer, initial)
const store = createStore(countReducer, initial)

// we need ot export this to provide the store to the react app 
export default store;
// now where do we import our store to use it