import {createAsyncThunk} from "@reduxjs/toolkit";
import {mealApi} from "../../../api/mealApi";

export const fillMealDetail = createAsyncThunk(
    'meal/fillMealDetail',
    async (mealId: number) => {
        try {
            const response = await mealApi.getMeal(mealId);
            return response.data;
        } catch (err) {

        }
    }
)