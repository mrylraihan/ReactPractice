import { createSlice } from '@reduxjs/toolkit'


const listInitialState = {
    list: []
}
const listSlice = createSlice({
    name: 'listSlice',
    initialState: listInitialState,
    reducers: {
        getList(state, action) {
            return { ...state, list: [...state.list, action.payload], }
        }
    }
})

export const listActions = listSlice.actions
export default listSlice.reducer