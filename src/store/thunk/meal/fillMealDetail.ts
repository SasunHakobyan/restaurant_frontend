import {createAsyncThunk} from "@reduxjs/toolkit";
import {mealApi} from "../../../api/mealApi";
import {IMeal} from "../../../models/meal";
import {ServerError} from "../../../models/errors";
import {AxiosError} from "axios";

export const fillMealDetail = createAsyncThunk<
    IMeal,
    number,
    {rejectValue: ServerError}
>(
    'meal/fillMealDetail',
    async (mealId, {rejectWithValue}) => {
        try {
            const response = await mealApi.getMeal(mealId);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)