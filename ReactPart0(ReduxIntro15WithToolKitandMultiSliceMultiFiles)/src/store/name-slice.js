import {createSlice}from '@reduxjs/toolkit'


const initialName = {
    name: '',
    nameList: []
}

const nameSlice = createSlice({
    name: 'nameSlice',
    initialState: initialName,
    reducers: {
        getName(state, action) {
            return { ...state, name: action.payload }
        },
        addToList(state) {
            return { ...state, nameList: [...state.nameList, state.name], name: '' }
        }
    }
})

export const nameActions = nameSlice.actions

export default nameSlice.reducer