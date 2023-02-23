import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {IMealState} from "../reducers/mealReducer";
import {fillMeals} from "../thunk/meal/fillMeals";
import {fillMealDetail} from "../thunk/meal/fillMealDetail";
import {fillOwnerMeals} from "../thunk/meal/fillOwnerMeals";
import {fillRestaurantMeals} from "../thunk/meal/fillRestaurantMeals";
import {fillMealsByIds} from "../thunk/meal/fillMealsByIds";
import {deleteMeal} from "../thunk/meal/deleteMeal";
import {addMeal} from "../thunk/meal/addMeal";

export const mealExtraReducers = (builder: ActionReducerMapBuilder<IMealState>) => {
    builder
        .addCase(fillMeals.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fillMeals.fulfilled, (state, action) => {
            state.meals = action.payload;
            state.isLoading = false;
        })
        .addCase(fillMeals.rejected, (state, action) => {
            state.infoMessage = action.payload?.message[0];
            state.isLoading = false;
        })

    builder
        .addCase(fillMealDetail.fulfilled, (state, action) => {
            state.mealDetail = action.payload;
        })
        .addCase(fillMealDetail.rejected, (state, action) => {
            state.infoMessage = action.payload?.message[0];
        })

    builder
        .addCase(fillOwnerMeals.fulfilled, (state, action) => {
            state.meals = action.payload;
        })
        .addCase(fillOwnerMeals.rejected, (state, action) => {
            state.infoMessage = action.payload?.message[0];
        })

    builder
        .addCase(fillRestaurantMeals.fulfilled, (state, action) => {
            state.meals = action.payload;
        })
        .addCase(fillRestaurantMeals.rejected, (state, action) => {
            state.infoMessage = action.payload?.message[0];
        })

    builder
        .addCase(fillMealsByIds.fulfilled, (state, action) => {
            state.meals = action.payload;
        })
        .addCase(fillMealsByIds.rejected, (state, action) => {
            state.infoMessage = action.payload?.message[0];
        })

    builder
        .addCase(addMeal.fulfilled, (state, action) => {
            state.successSave = true;
            state.infoMessage = 'Meal was created';
        })
        .addCase(addMeal.rejected, (state, action) => {
            state.infoMessage = action.payload?.message[0];
        })

    builder
        .addCase(deleteMeal.fulfilled, (state, action) => {
            state.infoMessage = 'Meal Deleted';
        })
        .addCase(deleteMeal.rejected, (state, action) => {
            state.infoMessage = action.payload?.message[0];
        })
}