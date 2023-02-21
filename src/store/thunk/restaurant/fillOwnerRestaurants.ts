import {createAsyncThunk} from "@reduxjs/toolkit";
import {restaurantApi} from "../../../api/restaurantApi";

export const fillOwnerRestaurants = createAsyncThunk(
    'restaurant/getOwnerRestaurants',
    async () => {
        try {
            const response = await restaurantApi.getOwnerRestaurants();
            return response.data;
        } catch (err) {

        }
    }
)