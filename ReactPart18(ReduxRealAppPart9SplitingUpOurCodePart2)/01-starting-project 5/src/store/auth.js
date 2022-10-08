import { createSlice } from '@reduxjs/toolkit'
// import redux from 'redux'


const initialLoginState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialLoginState,
    reducers: {
        login(state) {
            return { ...state, isAuthenticated: true }
        },
        logOut(state) {
            return { ...state, isAuthenticated: false }
        }
    }
})

export const authActions = authSlice.actions

export default authSlice.reducer