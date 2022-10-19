import { createSlice } from '@reduxjs/toolkit'

const initialNameState = {
    letter: '', 
    name: '', 

}

const nameSlice = createSlice({
    name: 'nameSlice',
    initialState: initialNameState,
    reducers: {
        getName(state) {
            return { ...state, name: state.letter, letter:''}
        },
        getLetter(state, action) {
            return { ...state, letter: action.payload }
        }
    }

})

export const nameActions = nameSlice.actions

export default nameSlice.reducer