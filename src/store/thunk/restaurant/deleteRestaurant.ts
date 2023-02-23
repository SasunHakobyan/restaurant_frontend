import {createAsyncThunk} from "@reduxjs/toolkit";
import {restaurantApi} from "../../../api/restaurantApi";
import {IRestaurant} from "../../../models/restaurant";
import {ServerError} from "../../../models/errors";
import {AxiosError} from "axios";

export const deleteRestaurant = createAsyncThunk<
    IRestaurant,
    number,
    {rejectValue: ServerError}
>(
    'restaurant/delete',
    async(id, {rejectWithValue}) => {
        try {
            const response = await restaurantApi.deleteRestaurant(id)
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)