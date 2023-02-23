import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {IRestaurantState} from "../reducers/restaurantReducer";
import {fillRestaurants} from "../thunk/restaurant/fillRestaurants";
import {fillOwnerRestaurants} from "../thunk/restaurant/fillOwnerRestaurants";
import {addRestaurant} from "../thunk/restaurant/addRestaurant";
import {deleteRestaurant} from "../thunk/restaurant/deleteRestaurant";
import {getRestaurantFormData} from "../thunk/restaurant/getRestaurantFormData";

export const restaurantExtraReducers = (builder: ActionReducerMapBuilder<IRestaurantState>) => {
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
            state.infoMessage = action.payload?.message;
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
            state.infoMessage = action.payload?.message;
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
            state.infoMessage = action.payload?.message;
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
            state.infoMessage = action.payload?.message;
        })

    builder
        .addCase(deleteRestaurant.fulfilled, (state, action) => {
            state.infoMessage = 'Restaurant Deleted';
        })
        .addCase(deleteRestaurant.rejected, (state, action) => {
            state.infoMessage = action.payload?.message;
        })
}