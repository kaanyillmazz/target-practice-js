import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    pointsCount: 0
}
export const pointsSlice = createSlice({
    name: 'points', initialState, reducers: {
        increasePoints: (state)=> {
            state.pointsCount++;
        },
    },
})

export const {increasePoints} = pointsSlice.actions;

export default pointsSlice.reducer