import {createAsyncThunk} from "@reduxjs/toolkit";
import {IAddRestaurant} from "../../../models/restaurant";
import {restaurantApi} from "../../../api/restaurantApi";

export const addRestaurant = createAsyncThunk(
    'restaurant/add',
    async (data: IAddRestaurant, { rejectWithValue }) => {
        try {
            const response = await restaurantApi.addRestaurant
            console.log(response);
        } catch (err: unknown) {
            rejectWithValue(err);
        }
    }
)