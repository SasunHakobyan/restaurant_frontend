import {createAsyncThunk} from "@reduxjs/toolkit";
import {IMeal} from "../../../models/meal";
import {ServerError} from "../../../models/errors";
import {AxiosError} from "axios";
import {mealApi} from "../../../api/mealApi";

export const editMeal = createAsyncThunk<
    IMeal,
    IMeal,
    {rejectValue: ServerError}
>(
    'meal/edit',
    async (data, {rejectWithValue}) => {
        try {
            const response = await mealApi.editMeal(data);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)