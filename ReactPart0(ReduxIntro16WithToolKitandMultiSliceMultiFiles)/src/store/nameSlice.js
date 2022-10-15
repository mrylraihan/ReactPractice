import { createSlice } from '@reduxjs/toolkit'

const initialNameState = {
    name: ''
}

const nameSlice = createSlice({
    name: 'nameSlice',
    initialState: initialNameState,
    reducers: {
        getName(state, action) {
            return { ...state, name: action.payload }
        }
    }

})

export const nameActions = nameSlice.actions

export default nameSlice.reducer