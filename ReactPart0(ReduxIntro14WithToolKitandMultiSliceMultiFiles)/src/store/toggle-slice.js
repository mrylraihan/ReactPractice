import { createSlice} from '@reduxjs/toolkit'

const toggleInitialState = {
    toggle: true
}
// create slices for 3 states
const toggleSlice = createSlice({
    name: 'toggleSlice',
    initialState: toggleInitialState,
    reducers: {
        getToggle(state) {
            return { ...state, toggle: !state.toggle }
        }
    }
})

export const toggleActions = toggleSlice.actions
export default toggleSlice.reducer