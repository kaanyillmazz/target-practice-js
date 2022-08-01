import {configureStore} from "@reduxjs/toolkit";
import pointsSlice from "../features/points/pointsSlice";
import countSlice from "../features/points/countSlice";

export const store = configureStore({
    reducer: {
        points: pointsSlice,
        count: countSlice
    },
})