import {createAsyncThunk} from "@reduxjs/toolkit";
import {restaurantApi} from "../../../api/restaurantApi";
import {IRestaurant} from "../../../models/restaurant";
import {ServerError} from "../../../models/errors";
import {AxiosError} from "axios";

export const fillOwnerRestaurants = createAsyncThunk<
    IRestaurant[],
    void,
    {rejectValue: ServerError}
>(
    'restaurant/getOwnerRestaurants',
    async (arg, {rejectWithValue}) => {
        try {
            const response = await restaurantApi.getOwnerRestaurants();
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)