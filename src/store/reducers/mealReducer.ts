import {createSlice} from "@reduxjs/toolkit";
import {IMeal} from "../../models/meal";
import {fillMeals} from "../thunk/meal/fillMeals";
import {deleteMeal} from "../thunk/meal/deleteMeal";
import {fillOwnerMeals} from "../thunk/meal/fillOwnerMeals";
import {addMeal} from "../thunk/meal/addMeal";
import {fillRestaurantMeals} from "../thunk/meal/fillRestaurantMeals";
import {fillMealDetail} from "../thunk/meal/fillMealDetail";

interface IMealState {
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
    extraReducers: (builder) => {
        builder
            .addCase(fillMeals.fulfilled, (state, action) => {
                state.meals = action.payload;
            })

        builder
            .addCase(fillMealDetail.fulfilled, (state, action) => {
                state.mealDetail = action.payload;
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
    }
});

export const {clearMessages, setMealDetailId} = mealSlice.actions;

export default mealSlice.reducer;