import {createAsyncThunk} from "@reduxjs/toolkit";
import {mealApi} from "../../../api/mealApi";
import {IMeal} from "../../../models/meal";
import {ServerError} from "../../../models/errors";
import {AxiosError} from "axios";

export const addMeal = createAsyncThunk<
    IMeal,
    Omit<IMeal, 'id'>,
    {rejectValue: ServerError}
>(
    'meal/addMeal',
    async (data, {rejectWithValue}) => {
        try {
            const response = await mealApi.addMeal(data);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)