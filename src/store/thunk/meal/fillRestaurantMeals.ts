import {createAsyncThunk} from "@reduxjs/toolkit";
import {mealApi} from "../../../api/mealApi";

export const fillRestaurantMeals = createAsyncThunk(
    'meal/fillRestaurantMeals',
    async (restaurantId: number) => {
        const response = await mealApi.getRestaurantMeals(restaurantId);
        return response.data;
    }
)