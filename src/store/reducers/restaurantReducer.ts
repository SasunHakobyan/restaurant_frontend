import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {restaurantApi} from "../../services/restaurantApi";
import {IRestaurant} from "../../models/restaurant";

interface IRestaurantState {
    restaurants: IRestaurant[] | null;
}

const initialState: IRestaurantState = {
    restaurants: null
}

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

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fillRestaurants.pending, (state, action) => {

            })
            .addCase(fillRestaurants.fulfilled, (state, action) => {
                state.restaurants = action.payload;
            })
            .addCase(fillRestaurants.rejected, (state, action) => {

            })
    }
});

export default restaurantSlice.reducer;