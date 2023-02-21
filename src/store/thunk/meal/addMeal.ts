import {createAsyncThunk} from "@reduxjs/toolkit";
import {mealApi} from "../../../api/mealApi";
import {IMeal} from "../../../models/meal";

export const addMeal = createAsyncThunk(
    'meal/addMeal',
    async (data: Omit<IMeal, 'id'>) => {
        const response = mealApi.addMeal(data);
        console.log(response);
    }
)