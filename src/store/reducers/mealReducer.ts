import {createSlice} from "@reduxjs/toolkit";
import {IMeal} from "../../models/meal";
import {mealExtraReducers} from "../extraReducers/meal";

export type IMealState = {
    meals: IMeal[] | null;
    infoMessage: string | undefined;
    mealDetailId: number | undefined;
    mealDetail: IMeal | undefined;
}

const initialState: IMealState = {
    meals: null,
    infoMessage: undefined,
    mealDetailId: undefined,
    mealDetail: undefined,
}

export const mealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        clearMessages(state) {
            state.infoMessage = undefined;
        },
        setMealDetailId(state, action) {
            state.mealDetailId = action.payload;
        }
    },

    extraReducers: mealExtraReducers
});

export const {clearMessages, setMealDetailId} = mealSlice.actions;

export default mealSlice.reducer;