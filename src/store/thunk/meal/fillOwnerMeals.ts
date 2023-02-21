import {createAsyncThunk} from "@reduxjs/toolkit";
import {restaurantApi} from "../../../api/restaurantApi";
import {mealApi} from "../../../api/mealApi";

export const fillOwnerMeals = createAsyncThunk(
    'meal/fillOwnerMeals',
    async () => {
        try {
            const response = await mealApi.getOwnerMeals();
            return response.data;
        } catch (err) {

        }
    }
)