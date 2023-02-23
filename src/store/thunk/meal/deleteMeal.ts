import {createAsyncThunk} from "@reduxjs/toolkit";
import {mealApi} from "../../../api/mealApi";
import {ServerError} from "../../../models/errors";
import {IMeal} from "../../../models/meal";
import {AxiosError} from "axios";

export const deleteMeal = createAsyncThunk<
    IMeal,
    number,
    {rejectValue: ServerError}
>(
    'meal/delete',
    async(id, {rejectWithValue}) => {
        try {
            const response = await mealApi.deleteMeal(id)
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)