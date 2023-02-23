import {createAsyncThunk} from "@reduxjs/toolkit";
import {restaurantApi} from "../../../api/restaurantApi";
import {IRestaurant} from "../../../models/restaurant";

interface IEditParams {
    restaurantId: number;
    restaurant: Omit<IRestaurant, "id" | "ownerId">;
}

export const editRestaurant = createAsyncThunk(
    'restaurant/edit',
    async (data: IEditParams, {rejectWithValue}) => {
        try {
            const response = await restaurantApi.editRestaurant(data.restaurantId, data.restaurant);
            console.log(response);
        } catch (err: unknown) {
            rejectWithValue(err)
        }
    }
)