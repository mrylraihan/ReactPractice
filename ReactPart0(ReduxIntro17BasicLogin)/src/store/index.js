import {createSlice, configureStore} from '@reduxjs/toolkit'


const initial = {
    userName: '',
    passWord: '',
    // loginInfo: { userName:'', passWord:''}
    loginInfo: ''
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initial,
    reducers: {
        getUsername(state, action) {
            return { ...state, userName: action.payload.user }
        },
        getPassword(state, action) {
            return { ...state, passWord: action.payload.pass }
        }, 
        getLogin(state){
            return {...state, loginInfo:{userName:state.userName, passWord:state.passWord}, passWord:'', userName:''}
        },
        getInitial(){ //not sure if this will work
            return initial
        }
    }
})

const store = configureStore({ reducer: { loginData: loginSlice.reducer } })
export const loginActions = loginSlice.actions

export default store