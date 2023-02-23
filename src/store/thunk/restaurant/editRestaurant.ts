import {createAsyncThunk} from "@reduxjs/toolkit";
import {restaurantApi} from "../../../api/restaurantApi";
import {IRestaurant} from "../../../models/restaurant";
import {ServerError} from "../../../models/errors";
import {AxiosError} from "axios";

interface IEditParams {
    restaurantId: number;
    restaurant: Omit<IRestaurant, "id" | "ownerId">;
}

export const editRestaurant = createAsyncThunk<
    IRestaurant,
    IEditParams,
    {rejectValue: ServerError}
>(
    'restaurant/edit',
    async (data, {rejectWithValue}) => {
        try {
            const response = await restaurantApi.editRestaurant(data.restaurantId, data.restaurant);
            return response.data;
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)