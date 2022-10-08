import { createSlice} from '@reduxjs/toolkit'

const initialToggleState = {
    toggle: true
}



const toggleSlice = createSlice({
    name: 'toggleSlice',
    initialState: initialToggleState,
    reducers: {
        getToggle(state) {
            return { ...state, toggle: !state.toggle }
        }
    }
})

export const toggleActions = toggleSlice.actions;
export default toggleSlice.reducer