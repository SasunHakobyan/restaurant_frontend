import { IAddRestaurant } from '../../models/restaurant';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { restaurantApi } from "../../api/restaurantApi";
import { IRestaurant } from "../../models/restaurant";
import {fillRestaurants} from "../thunk/restaurant/fillRestaurants";
import {addRestaurant} from "../thunk/restaurant/addRestaurant";
import {deleteRestaurant} from "../thunk/restaurant/deleteRestaurant";
import {fillOwnerRestaurants} from "../thunk/restaurant/fillOwnerRestaurants";

interface IRestaurantState {
    restaurants: IRestaurant[] | null;
    restaurantFormData: IAddRestaurant;
    saved: boolean;
    isLoading: boolean;
    infoMessage: string | undefined;
}

const initialState: IRestaurantState = {
    restaurants: null,
    restaurantFormData: {
        name: '',
        description: '',
        imgUrl: ''
    },
    saved: false,
    isLoading: false,
    infoMessage: undefined
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
        clearMessages(state) {
            state.infoMessage = undefined;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fillRestaurants.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fillRestaurants.fulfilled, (state, action) => {
                state.isLoading = false;
                state.restaurants = action.payload;
            })
            .addCase(fillRestaurants.rejected, (state, action) => {
                state.isLoading = false;
            })

        builder
            .addCase(fillOwnerRestaurants.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fillOwnerRestaurants.fulfilled, (state, action) => {
                state.isLoading = false;
                state.restaurants = action.payload;
            })
            .addCase(fillOwnerRestaurants.rejected, (state, action) => {
                state.isLoading = false;
            })

        builder
            .addCase(addRestaurant.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(addRestaurant.fulfilled, (state, action) => {
                state.isLoading = false;
                state.saved = true;
            })
            .addCase(addRestaurant.rejected, (state, action) => {
                state.isLoading = false;
                console.log(action)
            })

        builder
            .addCase(getRestaurantFormData.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getRestaurantFormData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.restaurantFormData = {
                    name: action.payload.name,
                    description: action.payload.description,
                    imgUrl: action.payload.imgUrl
                }
            })
            .addCase(getRestaurantFormData.rejected, (state, action) => {
                state.isLoading = false;
            })

        builder
            .addCase(deleteRestaurant.fulfilled, (state, action) => {
                state.infoMessage = 'Restaurant Deleted';
            })
            .addCase(deleteRestaurant.rejected, (state, action) => {
                console.log(action);
            })
    }
});

export default restaurantSlice.reducer;