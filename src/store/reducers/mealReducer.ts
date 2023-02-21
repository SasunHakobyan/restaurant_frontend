import {createSlice} from "@reduxjs/toolkit";
import {IMeal} from "../../models/meal";
import {fillMeals} from "../thunk/meal/fillMeals";
import {deleteMeal} from "../thunk/meal/deleteMeal";
import {fillOwnerMeals} from "../thunk/meal/fillOwnerMeals";

interface IMealState {
    meals: IMeal[] | null;
    infoMessage: string | undefined;
}

const initialState: IMealState = {
    meals: null,
    infoMessage: undefined
}

export const mealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        clearMessages(state) {
            state.infoMessage = undefined;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fillMeals.fulfilled, (state, action) => {
                state.meals = action.payload;
            })
            .addCase(fillMeals.rejected, (state, action) => {

            })

        builder
            .addCase(fillOwnerMeals.fulfilled, (state, action) => {
                state.meals = action.payload;
            })
            .addCase(fillOwnerMeals.rejected, (state, action) => {

            })

        builder
            .addCase(deleteMeal.fulfilled, (state, action) => {
                state.infoMessage = 'Meal Deleted';
            })
            .addCase(deleteMeal.rejected, (state, action) => {
                console.log('error')
            })
    }
});

export const {clearMessages} = mealSlice.actions;

export default mealSlice.reducer;