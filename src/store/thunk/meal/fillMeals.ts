import {createAsyncThunk} from "@reduxjs/toolkit";
import {mealApi} from "../../../api/mealApi";

export const fillMeals = createAsyncThunk(
    'meal/getAll',
    async () => {
        try {
            const response = await mealApi.getAll();
            return response.data;
        } catch (err) {

        }
    }
)