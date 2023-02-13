import { IAddRestaurant } from '../../models/restaurant';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { restaurantApi } from "../../services/restaurantApi";
import { IRestaurant } from "../../models/restaurant";
import {fillRestaurants} from "../thunk/restaurant/fillRestaurants";
import {addRestaurant} from "../thunk/restaurant/addRestaurant";

interface IRestaurantState {
    restaurants: IRestaurant[] | null;
    restaurantFormData: IAddRestaurant;
    saved: boolean;
}

const initialState: IRestaurantState = {
    restaurants: null,
    restaurantFormData: {
        name: '',
        description: '',
        imgUrl: ''
    },
    saved: false
}

export const getRestaurantFormData = createAsyncThunk(
    'restaurant/getFormData',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await restaurantApi.findRestaurant(id);
            return response.data;
        } catch (err) {
            rejectWithValue(err);
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

        builder
            .addCase(addRestaurant.fulfilled, (state, action) => {
                state.saved = true;
            })
            .addCase(addRestaurant.rejected, (state, action) => {
            })

        builder
            .addCase(getRestaurantFormData.fulfilled, (state, action) => {
                state.restaurantFormData = {
                    name: action.payload.name,
                    description: action.payload.description,
                    imgUrl: action.payload.imgUrl
                }
            })
            .addCase(getRestaurantFormData.rejected, (state, action) => {
            })
    }
});

export default restaurantSlice.reducer;