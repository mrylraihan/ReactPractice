const redux = require('redux')
//create a ruder function the same way you would for a reducer hook 
const nameReducer = (state, action)=>{
    if (action.type == 'first') {
        return {...state, firstName : action.first}
        
    } else if (action.type == 'last') {
        return { ...state, lastName: action.last }
    }else if(action.type == 'full'){
        return { ...state, fullName: `${state.firstName} ${state.lastName}` }
    }
    return state;
}
// this can be the initial state you pass in the create store after the reducer function 
const initial = {firstName:'', lastName:'', fullName:''}

// this is how you initialize the store/context state and it takes in 2 params
//the first being the reducer function like useReducerhook
// the second being the initial state like the useReducerhook

const store = redux.createStore(nameReducer, initial);

// this is how you are able to access the state in our store, because we didnt change anything its the initial state 
const test = store.getState()
console.log(test, 'outside');//will log the initial state 

// a function we pass in to our subscriber that logs the current state 
const logSubscriber = ()=>{
    const test = store.getState()
    console.log(test);
}

// the subscriber is a method that takes in a function that will run everytime the state is changed which we do with our dispatch method, similar to useEffect
store.subscribe(logSubscriber)
// the only way to manipulate the state of our store just like the useReducer hook 
store.dispatch({type:'first', first:'Wallie'})
store.dispatch({type:'last', last:'Raihan'})
store.dispatch({type:'full'})
console.log(store.getState());