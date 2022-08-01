import {configureStore} from "@reduxjs/toolkit";
import pointsSlice from "../features/points/pointsSlice";

export const store = configureStore({
    reducer: {
        points: pointsSlice

    },
})