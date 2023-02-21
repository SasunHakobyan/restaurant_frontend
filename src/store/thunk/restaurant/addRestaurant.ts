import {createAsyncThunk} from "@reduxjs/toolkit";
import {IAddRestaurant} from "../../../models/restaurant";
import {restaurantApi} from "../../../api/restaurantApi";
import {AxiosError} from "axios";

export interface IBadRequestError {
    error: string;
    message: string;
    statusCode: number;
}

export const addRestaurant = createAsyncThunk(
    'restaurant/add',
    async (data: IAddRestaurant, { rejectWithValue }) => {
        try {
            const response = await restaurantApi.addRestaurant(data);
            return response.data;
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as IBadRequestError)
            }
        }
    }
)