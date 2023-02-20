import {createAsyncThunk} from "@reduxjs/toolkit";
import {restaurantApi} from "../../../api/restaurantApi";

export const deleteRestaurant = createAsyncThunk(
    'restaurant/delete',
    async(id: number, {rejectWithValue}) => {
        try {
            const response = await restaurantApi.deleteRestaurant(id)
            return response.data;
        } catch (err) {
            rejectWithValue(err);
        }
    }
)