const redux = require('redux');
// we can do default param or default state for our state param
const counterReducer = (state = {counter:0}, action)=> {
    if(action.type == 'increment'){
        return {
            counter: state.counter + 1
        }
    }else if(action.type == 'decrement'){
        return {counter: state.counter - 1}
    }
    return state;
}


// const store = redux.configureStore();
const store = redux.createStore(counterReducer);

console.log(store.getState(), 'outside or function');

const counterSubscriber = () =>{
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber)

store.dispatch({type: 'increment'})
store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})
store.dispatch({type: ''})
store.dispatch({type: '1'})
