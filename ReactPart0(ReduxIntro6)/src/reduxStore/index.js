import { createStore } from 'redux'

const initial = {
    quote: ''
}


const quoteReducer = (state, action) => {
    if (action.type == 'quote') {
        return { ...state, quote: action.q }
    }
    return initial
}

const store = createStore(quoteReducer, initial)

export default store