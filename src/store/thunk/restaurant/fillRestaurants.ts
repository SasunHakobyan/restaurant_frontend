import {createAsyncThunk} from "@reduxjs/toolkit";
import {restaurantApi} from "../../../services/restaurantApi";

export const fillRestaurants = createAsyncThunk(
    'restaurant/getAll',
    async () => {
        try {
            const response = await restaurantApi.getAll();
            return response.data;
        } catch (err) {

        }
    }
)