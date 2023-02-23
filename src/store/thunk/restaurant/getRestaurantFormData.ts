import {createAsyncThunk} from "@reduxjs/toolkit";
import {restaurantApi} from "../../../api/restaurantApi";
import {IRestaurant} from "../../../models/restaurant";
import {ServerError} from "../../../models/errors";
import {AxiosError} from "axios";

export const getRestaurantFormData = createAsyncThunk<
    IRestaurant,
    number,
    {rejectValue: ServerError}
>(
    'restaurant/getFormData',
    async (id, { rejectWithValue }) => {
        try {
            const response = await restaurantApi.findRestaurant(id);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)