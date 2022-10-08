import { createSlice } from '@reduxjs/toolkit'

const nameInitialState = {
    name: ''
}
const nameSlice = createSlice({
    name: 'nameSlice',
    initialState: nameInitialState,
    reducers: {
        getName(state, action) {
            return { ...state, name: action.payload }
        }
    }
})


export const nameActions = nameSlice.actions

export default nameSlice.reducer