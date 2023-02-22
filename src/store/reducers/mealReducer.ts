import {createSlice} from "@reduxjs/toolkit";
import {IMeal} from "../../models/meal";
import {fillMeals} from "../thunk/meal/fillMeals";
import {deleteMeal} from "../thunk/meal/deleteMeal";
import {fillOwnerMeals} from "../thunk/meal/fillOwnerMeals";
import {addMeal} from "../thunk/meal/addMeal";
import {fillRestaurantMeals} from "../thunk/meal/fillRestaurantMeals";

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

        builder
            .addCase(fillOwnerMeals.fulfilled, (state, action) => {
                state.meals = action.payload;
            })

        builder
            .addCase(fillRestaurantMeals.fulfilled, (state, action) => {
                state.meals = action.payload;
            })

        builder
            .addCase(deleteMeal.fulfilled, (state, action) => {
                state.infoMessage = 'Meal Deleted';
            })

        builder
            .addCase(addMeal.fulfilled, (state, action) => {

            })
            .addCase(addMeal.rejected, (state, action) => {

            })
    }
});

export const {clearMessages} = mealSlice.actions;

export default mealSlice.reducer;