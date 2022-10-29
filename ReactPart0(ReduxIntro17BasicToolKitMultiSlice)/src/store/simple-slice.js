import {createSlice} from '@reduxjs/toolkit'

const initial = {
    firstName: '',
    lastName: '',
    fullName: ''
}

const simpleSlice = createSlice({
    name: 'simpleSlice',
    initialState: initial,
    reducers: {
        getFirstName(state, action) {
            return { ...state, firstName: action.payload.first }
        },
        getLastName(state, action) {
            return { ...state, lastName: action.payload.last }
        },
        getFullName(state) {
            return { ...state, fullName: `${state.firstName} ${state.lastName}`, firstName: '', lastName: '' }
        }
    }
})


export const simpleActions = simpleSlice.actions

export default simpleSlice.reducer