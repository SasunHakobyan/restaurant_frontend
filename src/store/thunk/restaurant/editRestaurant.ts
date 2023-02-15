import {createAsyncThunk} from "@reduxjs/toolkit";
import {IAddRestaurant} from "../../../models/restaurant";
import {restaurantApi} from "../../../api/restaurantApi";

interface IEditParams {
    restaurantId: number;
    restaurant: IAddRestaurant;
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