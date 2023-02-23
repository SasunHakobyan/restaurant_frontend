import {createAsyncThunk} from "@reduxjs/toolkit";
import {IRestaurant} from "../../../models/restaurant";
import {restaurantApi} from "../../../api/restaurantApi";
import {AxiosError} from "axios";
import {ServerError} from "../../../models/errors";

export const addRestaurant = createAsyncThunk<
    IRestaurant,
    Omit<IRestaurant, "id" | "ownerId">,
    {rejectValue: ServerError}
>(
    'restaurant/add',
    async (data, { rejectWithValue }) => {
        try {
            const response = await restaurantApi.addRestaurant(data);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError)
            }
        }
    }
)