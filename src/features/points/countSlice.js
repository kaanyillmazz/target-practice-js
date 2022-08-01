import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 60
}
export const countSlice = createSlice({
    name: 'count', initialState, reducers: {
        decreaseCount: (state)=> {
            state.value--;
        },
    },
})

export const {decreaseCount} = countSlice.actions;

export default countSlice.reducer