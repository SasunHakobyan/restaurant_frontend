import {createAsyncThunk} from "@reduxjs/toolkit";
import {mealApi} from "../../../api/mealApi";
import {IMeal} from "../../../models/meal";
import {ServerError} from "../../../models/errors";
import {AxiosError} from "axios";

export const fillOwnerMeals = createAsyncThunk<
    IMeal[],
    void,
    {rejectValue: ServerError}
>(
    'meal/fillOwnerMeals',
    async (arg, {rejectWithValue}) => {
        try {
            const response = await mealApi.getOwnerMeals();
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)