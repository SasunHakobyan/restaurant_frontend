import {createAsyncThunk} from "@reduxjs/toolkit";
import {mealApi} from "../../../api/mealApi";

export const deleteMeal = createAsyncThunk(
    'meal/delete',
    async(id: number, {rejectWithValue}) => {
        try {
            const response = await mealApi.deleteMeal(id)
            return response.data;
        } catch (err) {
            rejectWithValue(err);
        }
    }
)