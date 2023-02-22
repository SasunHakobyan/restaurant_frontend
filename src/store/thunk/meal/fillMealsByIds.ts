import {createAsyncThunk} from "@reduxjs/toolkit";
import {mealApi} from "../../../api/mealApi";

export const fillMealsByIds = createAsyncThunk(
    'meal/fillMealsById',
    async (mealIds: number[]) => {
        try {
            const response = await mealApi.getMealsByIds(mealIds);
            return response.data;
        } catch (err) {

        }
    }
)